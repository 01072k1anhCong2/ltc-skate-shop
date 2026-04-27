import { Navbar, Nav, Container, NavDropdown, Badge } from 'react-bootstrap';
import { FaShoppingCart, FaUser } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { useLogoutMutation } from '../slices/usersApiSlice';
import { logout } from '../slices/authSlice';
import SearchBox from './SearchBox';
import logo from '../assets/logo1.png';
import { resetCart } from '../slices/cartSlice';
import { useState, useEffect, useRef } from 'react'; // Thêm useRef

const Header = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const { userInfo } = useSelector((state) => state.auth);
  
  // Trạng thái đóng mở Navbar
  const [expanded, setExpanded] = useState(false);
  const navRef = useRef(null); 

  const [navBackground, setNavBackground] = useState('bg-primary bg-opacity-40');

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Đóng navbar khi cuộn chuột (lên hoặc xuống đều đóng)
      if (expanded) {
        setExpanded(false);
      }

      if (currentScrollY > lastScrollY) {
        setNavBackground('bg-primary bg-opacity-50');
      } else {
        setNavBackground('bg-primary bg-opacity-40');
      }

      lastScrollY = currentScrollY;
    };

    // Xử lý click ra ngoài vùng Navbar
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setExpanded(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [expanded]); // Theo dõi expanded để đóng khi scroll

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [logoutApiCall] = useLogoutMutation();

  const logoutHandler = async () => {
    try {
      await logoutApiCall().unwrap();
      dispatch(logout());
      dispatch(resetCart());
      setExpanded(false); // Đóng nav khi logout
      navigate('/login');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <header ref={navRef}>
      <Navbar 
        fixed='top' 
        variant='dark' 
        expand='lg' 
        collapseOnSelect 
        className={`${navBackground} transition-all`}
        expanded={expanded} // Gán trạng thái điều khiển
        onToggle={(navExpanded) => setExpanded(navExpanded)} // Xử lý khi bấm nút Toggle
      >
        <Container>
          <Navbar.Brand as={Link} to='/' onClick={() => setExpanded(false)}>
            <img src={logo} alt='LTC-skateshop' className="ltc-skateshop"/>
            <span className="logo-text">Ltc SkateShop</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ms-auto'>
              <SearchBox />
              <Nav.Link as={Link} to='/cart' onClick={() => setExpanded(false)}>
                <FaShoppingCart /> Cart
                {cartItems.length > 0 && (
                  <Badge pill bg='success' style={{ marginLeft: '5px' }}>
                    {cartItems.reduce((a, c) => a + c.qty, 0)}
                  </Badge>
                )}
              </Nav.Link>
              {userInfo ? (
                <>
                  <NavDropdown title={userInfo.name} id='username'>
                    <NavDropdown.Item as={Link} to='/profile' onClick={() => setExpanded(false)}>
                      Profile
                    </NavDropdown.Item>
                    <NavDropdown.Item onClick={logoutHandler}>
                      Logout
                    </NavDropdown.Item>
                  </NavDropdown>
                </>
              ) : (
                <Nav.Link as={Link} to='/login' onClick={() => setExpanded(false)}>
                  <FaUser /> Sign In
                </Nav.Link>
              )}

              {userInfo && userInfo.isAdmin && (
                <NavDropdown title='Admin' id='adminmenu'>
                  <NavDropdown.Item as={Link} to='/admin/productlist' onClick={() => setExpanded(false)}>
                    Products
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to='/admin/orderlist' onClick={() => setExpanded(false)}>
                    Orders
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to='/admin/userlist' onClick={() => setExpanded(false)}>
                    Users
                  </NavDropdown.Item>
                </NavDropdown>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;