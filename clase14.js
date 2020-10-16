$(function () {

	
	$.ajax({
		url: 'products.json',
		success: function (data) {
			
			data.forEach(element => {
				$('#productos').append(`<article class="product">
          <div class="img-container">
            <img
              src=${element.image}
              alt="product"
              class="product-img"
            />            
          </div>
          <h3>${element.title}</h3>
          <h4>$${element.price}</h4>
        </article>
        `)
			});
			
		},
		error: function (jqXHR, status, error) {
			console.log("Error")
			console.log(jqXHR)
			console.log(`Error -> Status: ${status} - Error: ${error}`)
		}
	})
})