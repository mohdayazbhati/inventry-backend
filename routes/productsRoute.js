import express from "express";
import { Product } from "../Model/productModel.js";

const router = express.Router();

// Route for Create a New Product
router.post('/', async(req, res) => {
    try {
        if (
            !req.body.name ||
            !req.body.companyName ||
            !req.body.price ||
            !req.body.description ||
            !req.body.tax
        )  {
            return res.status(400).send({
                message: 'Send all required fields: name, companyName, price, decription, tax',
            })
        }

        const newProduct = {
            name: req.body.name,
            companyName: req.body.companyName,
            price: req.body.price,
            description: req.body.description,
            tax: req.body.tax
        };

        const product = await Product.create(newProduct)

        return res.status(201).send(product)
    } catch (error) {
       console.log(error.message);
       res.status(500).send({ message: error.message }) 
    }
});

// Route for Update 
router.put('/:id', async (req, res) => {
    try {
      if (
        !req.body.name ||
        !req.body.companyName ||
        !req.body.price ||
        !req.body.description ||
        !req.body.tax
      ) {
        return res.status(400).send({
          message: 'Send all required fields: name, companyName, price, description, tax',
        });
      }
  
      const { id } = req.params;
  
      const result = await Product.findByIdAndUpdate(id, req.body);
  
      if (!result) {
        return res.status(404).json({ message: 'Product not found' });
      }
  
      return res.status(200).send({ message: 'Product updated successfully' });
    } catch (error) {
      console.log(error.message);
      res.status(500).send({ message: error.message });
    }
});

// Route for Show All Product from Database
router.get('/', async (req, res) => {
    try {
      const products = await Product.find({});
  
      return res.status(200).json({
        count: products.length,
        data: products,
      });
    } catch (error) {
      console.log(error.message);
      response.status(500).send({ message: error.message });
    }
});

// 


export default router;