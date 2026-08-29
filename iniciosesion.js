<script>
   const usuarioCorrecto = "admin";
   const contrasenaCorrecta = "1234";

   let intentos = 0;
   const maxIntentos = 3;
   let sesionIniciada = false;
   if (usuario === usuarioCorrecto && contrasena === contrasenaCorrecta)
   {alert("Bienvenido " + usuario);
    sesionIniciada = true;      } 