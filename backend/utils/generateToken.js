import jwt from 'jsonwebtoken';

const generateToken = (res, userId) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  });

  // Giữ lại Cookie cho các trình duyệt hỗ trợ
  res.cookie('jwt', token, {
    httpOnly: true,
    secure: true, 
    sameSite: 'None', 
    maxAge: 30 * 24 * 60 * 60 * 1000, // 30 ngày
  });

  // QUAN TRỌNG: Trả token về để Controller có thể gửi sang Frontend
  return token; 
};

export default generateToken;