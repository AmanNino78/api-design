import { Router } from 'express'
import { body, oneOf, validationResult} from "express-validator"
import { createProduct, deleteProduct, getOneProduct, getProducts } from './handlers/product'
import { CreateUpdates, deleteUpdate, getOneUpdate, getUpdates, updateUpdate } from './handlers/update'
import { handleInputErrors } from './modules/middlewear'

const router = Router()
/**
 * Product
 */

router.get('/product', getProducts)
router.get('/product/:id', getOneProduct)
router.put('/product/:id', body('name').isString(), handleInputErrors, (req, res) => {
    
})
router.post('/product', body('name').isString(), handleInputErrors, createProduct)
router.delete('/product/:id', deleteProduct)


/**
 * Update
 */
router.get('/update', getUpdates)
 router.get('/update/:id', getOneUpdate)
 router.put('/update/:id', 
 body('title').optional(), 
 body('body').optional(), 
 body('status').isIn(['IN_PROGRESS', 'SHIPPED', 'DEPRECATED']).optional(),
 body('version').optional(), 
updateUpdate
 )
 router.post('/update', 
 body('title').exists().isString(), 
 body('body').exists().isString(),
 body('productId').exists().isString(),
 CreateUpdates
 )
 router.delete('/update/:id', deleteUpdate)
 
 /**
  * Update Point
  */

 router.put('/updatepoint/:id', 
  body('name').optional().isString(), 
  body('description').optional().isString(), 
  () => {}
  )
 router.post('/updatepoint',
  body('name').isString(), 
  body('description').isString(),
  body('updatId').exists().isString(), 
  () => {}
 )
 router.delete('/updatepoint/:id', () => {})
 router.get('/updatepoint', () => {})
 router.get('/updatepoint/:id', () => {})
  
 export default router 