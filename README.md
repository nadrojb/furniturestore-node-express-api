Return all product categories
URL

/categories.php

Method:

GET

URL Params

There are no URL params

Example:

/categories.php

Success Response:

Code: 200
Content:
{
  "message": "Successfully retrieved categories",
  "data":
  [
      {
          "id": "1",
          "name": "Chair",
          "products": "82"
      },
      {
          "id": "2",
          "name": "Table",
          "products": "37"
      }
  ]
}
Error Response:

Code: 500 SERVER ERROR
Content: {"message": "Unexpected error", "data": []}
Return all products in a category
URL

/products.php

Method:

GET

URL Params

Required:

cat - category ID for the required products

Optional:

currency - currency unit to provide price in. Choose from: GBP,USD,EUR,YEN. Default is GBP
instockonly - boolean choose to only return in-stock products. Default is 0

Example:

/products.php?cat=2&currency=GBP&instockonly=0

Success Response:

Code: 200
Content:
{
  "message": "Successfully retrieved products",
  "data":
  [
      {
        "id": 1,
        "price": "48.61",
        "stock": 8,
        "color": "Teal"
      },
      {
        "id": 2,
        "price": "182.08",
        "stock": 2,
        "color": "Green"
      }
  ]
}
Error Response:

Code: 400 BAD REQUEST
Content: {"message": "Invalid category id", "data": []}

Code: 400 BAD REQUEST
Content: {"message": "Invalid currency", "data": []}

Code: 500 SERVER ERROR
Content: {"message": "Unexpected error", "data": []}

Return all details about a specific product
URL

/product.php

Method:

GET

URL Params

Required:

id - product ID for the requested product

Optional:

unit - unit of measure to provide dimensions in. Choose from: mm,cm,in,ft. Default is mm
currency - currency unit to provide price in. Choose from: GBP,USD,EUR,YEN. Defualt is GBP

Example:

/product.php?id=2&unit=mm&currency=GBP

Success Response:

Code: 200
Content:
{
  "message": "Successfully retrieved product",
  "data":
    {
      "categoryId": 2,
      "width": 1517,
      "height": 2040,
      "depth": 1445,
      "price": "48.61",
      "stock": 8,
      "related": 525,
      "color": "Teal"
    }
}
Error Response:

Code: 400 BAD REQUEST
Content: {"message": "Invalid product id", "data": []}

Code: 400 BAD REQUEST
Content: {"message": "Invalid currency", "data": []}

Code: 400 BAD REQUEST
Content: {"message": "Invalid unit of measure", "data": []}

Code: 500 SERVER ERROR
Content: {"message": "Unexpected error", "data": []}
