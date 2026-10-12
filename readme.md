aplication son los casos de uso

config las dbs

cuando la app arranca va arrancar el controlador

el controlador va aplicatión y en aplicatión usa service
en service esta el modelo de negocio ahi estan las reglas de funcionalidad, control de errores, que no se vayan datos duplicados, a eso s ele llama el modelo de negocio, una vez el service valida todo

si es de lectura nunca a entrar a models pero si es edición si va a entrar a model, para hacer la correspondiente edició

Entonces se va a infraestructure y de ahi va a persistences en ese caso a mysql

crear script en mysql vamos manejar herencia, una clase hija en mysql, la clase padre se ubica en ports

1.src/config/mysql_conecction.py
2.src/application/ports/product_repository.py
3.src/infrastructure/persistence/mysql/product_repository_mysql.py
4.src/application/service/product_service.py
5.src/infrastructure/web/controllers/product_controller.py
6.app.js
