import express from 'express'; 
const router = express.Router();
import Product from '../models/productModel.js';

router.get("/shop-data", async (req, res) => {
    try {
        const products = await Product.find({}); 
        
        res.status(200).json(products); 
        
    } catch (error) {
        console.error("Lỗi lấy dữ liệu shop-data:", error);
        res.status(500).json({ message: "Lỗi lấy dữ liệu" });
    }
});

export default router;