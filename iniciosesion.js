<script>
   const usuarioCorrecto = "admin";
   const contrasenaCorrecta = "1234";

   let intentos = 0;
   const maxIntentos = 3;
   let sesionIniciada = false;
   
   while (intentos < maxIntentos && sesionIniciada === false) {
      let usuario = prompt("Ingrese su usuario:");
      let contrasena = prompt("Ingrese su contraseña:");

   if (usuario === usuarioCorrecto && contrasena === contrasenaCorrecta)
   {alert("Bienvenido " + usuario);
    sesionIniciada = true;      } 