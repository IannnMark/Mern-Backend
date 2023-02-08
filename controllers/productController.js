// const Product = require('../models/product')
// const APIFeatures = require('../utils/apiFeatures')



// //create new product

// exports.newProduct = async(req,res,next) => {

// 	console.log(req.body);

// 	const product = await Product.create(req.body);

// 	res.status(201).json({

// 		success:true,

// 		product 

// 	})

// }

// // exports.getProducts = async (req,res,next) => {

// // 	const products = await Product.find();

// // 	res.status(200).json({

// // 		success: true,

// // 		count: products.length,

// // 		products

// // 	})

// // }

//   exports.getProducts = async (req, res, next) => {

// 	const resPerPage = 4;

// 	const productsCount = await Product.countDocuments();

// 	// console.log(productsCount,req.query,Product.find())

// 	// console.log(Product.find())

// 	// const apiFeatures = new APIFeatures(Product.find(),req.query).search().filter()
// 	const apiFeatures = new APIFeatures(Product.find(),req.query).search()



// 	// const products = await Product.find();

// 	// apiFeatures.pagination(resPerPage);

// 	const products = await apiFeatures.query;

	

// 	// console.log(products)

// 	res.status(200).json({

// 		success: true,

// 		count: products.length,

// 		productsCount,

// 		products

// 	})

// }




// exports.getSingleProduct = async(req,res,next) => {

// 	 const product = await Product.findById(req.params.id);

// 	 if(!product) {

// 	 		return res.status(404).json({

// 	 			success: false,

// 	 			message: 'Product not found'

// 	 		})

// 	 }

// 	 res.status(200).json({

// 	 	success: true,

// 	 	product

// 	 })

// }


const Product = require('../models/product')
const APIFeatures = require('../utils/apiFeatures')


//create new product

exports.newProduct = async(req,res,next) => {

	console.log(req.body);

	const product = await Product.create(req.body);

	const apiFeatures = new APIFeatures(Product.find(),req.query).search().filter()

	const products = await

	res.status(201).json({

		success:true,

		product 

	})

}

exports.getProducts = async (req,res,next) => {

	const products = await Product.find();

	res.status(200).json({

		success: true,

		count: products.length,

		products

	})

}

// exports.getSingleProduct = async(req,res,next) => {

//     const product = await Product.findById(req.params.id);

//     if(!product) {

//             return res.status(404).json({

//                 success: false,

//                 message: 'Product not found'

//             })

//     }

//     res.status(200).json({

//         success: true,

//         product

//     })

// }

// exports.getSingleProduct = catchAsyncErrors(async(req,res,next) => {
	

// 	 const product = await Product.findById(req.params.id);

// 	 console.log(product);

// 	 // if(!product) {

// 	 // 		return res.status(404).json({

// 	 // 			success: false,

// 	 // 			message: 'Product not found'

// 	 // 		});

// 	 // }

// 	  if(!product) {

// 	 		return next(new ErrorHandler('Product not found',404));

// 	 }

// 	 res.status(200).json({

// 	 	success: true,

// 	 	product

// 	 })

// })



exports.getSingleProduct = async(req,res,next) => {

   
	 const product = await Product.findById(req.params.id);

	 console.log(product);

	 // if(!product) {

	 // 		return res.status(404).json({

	 // 			success: false,

	 // 			message: 'Product not found'

	 // 		});

	 // }

	  if(!product) {

	 		return next(new ErrorHandler('Product not found',404));

	 }

	 res.status(200).json({

	 	success: true,

	 	product

	 })


}

// exports.getSingleProduct = catchAsyncErrors(async(req,res,next) => {
	

// 	 const product = await Product.findById(req.params.id);

// 	 console.log(product);

// 	 // if(!product) {

// 	 // 		return res.status(404).json({

// 	 // 			success: false,

// 	 // 			message: 'Product not found'

// 	 // 		});

// 	 // }

// 	  if(!product) {

// 	 		return next(new ErrorHandler('Product not found',404));

// 	 }

// 	 res.status(200).json({

// 	 	success: true,

// 	 	product

// 	 })

// })

exports.updateProduct = async(req,res,next) => {

	let product = await Product.findById(req.params.id);

	if(!product) {

	 		return res.status(404).json({

	 			success: false,

	 			message: 'Product not found'

	 		})

	 }

	 product = await Product.findByIdAndUpdate(req.param.id,req.body,{

	 	new: true,

	 	runValidators:true,

	 	useFindandModify:false

	 })

	 res.send(200).json({

	 	success:true,

	 	product

	 })

}



exports.deleteProduct = async(req,res,next) => {

	const product = await Product.findById(req.params.id);

	if(!product) {

	 		return res.status(404).json({

	 			success: false,

	 			message: 'Product not found'

	 		})

	 }

	 await product.remove();

	 res.status(200).json({

	 	success: true,

	 	message: 'Product deleted'

	 })

}

exports.getProducts = async (req, res, next) => {

	const resPerPage = 4;

	const productsCount = await Product.countDocuments();

	// console.log(productsCount,req.query,Product.find())

	// console.log(Product.find())

	const apiFeatures = new APIFeatures(Product.find(),req.query).search().filter()



	// const products = await Product.find();

	apiFeatures.pagination(resPerPage);

	const products = await apiFeatures.query;

	

	// console.log(products)

	res.status(200).json({

		success: true,

		count: products.length,

		productsCount,

		products

	})

}

// const apiFeatures = new APIFeatures(Product.find(),req.query).search().filter()
