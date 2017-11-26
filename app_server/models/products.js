function Products(idProduct,nameProduct,cost,description,sale,
	available,sold,idArtist,idSubcategories){
	this.idProduct = idProduct;
	this.nameProduct = nameProduct;
	this.cost = cost;
	this.description = description;
	this.sale = sale;
	this.available = available;
	this.sold = sold;
	this.idArtist = idArtist;
	this.idSubcategory = idSubcategories;
}

module.exports = Products;
