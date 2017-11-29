function Products(idProduct,nameProduct,cost,description,sale,
	available,sold,idArtist,idSubcategories,image){
	this.idProduct = idProduct;
	this.nameProduct = nameProduct;
	this.cost = cost;
	this.description = description;
	this.sale = sale;
	this.available = available;
	this.sold = sold;
	this.idArtist = idArtist;
	this.idSubcategory = idSubcategories;
	this.image = image;
}

module.exports = Products;
