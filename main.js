function main() {
    //Access the canvas through DOM: Document Object Model
    var canvas = document.getElementById('myCanvas');   // The paper
    var gl = canvas.getContext('webgl');                // The brush and the paints

    // Define vertices data
    /**
     * A ( -0.5, -0.5 )
     * B (  0.5, -0.5 )
     * C (  0.5,  0.5 )
     * D ( -0.5,  0.5 )
     */

    var vertices = [
      //  Ho boi, yang gerak
        //ATAAAAASSSSSSSSSSS
      //Atas
        0.344, 0.4, 0.80, 0.8, 0.72, 
        0.655, 0.4, 0.80, 0.8, 0.72,
        0.655, 0.35, 0.80, 0.8, 0.72,

        0.344, 0.4, 0.80, 0.8, 0.72, 
        0.344, 0.35, 0.80, 0.8, 0.72,
        0.655, 0.35, 0.80, 0.8, 0.72,
      //agak atas
        0.35, 0.35, 0.80, 0.8, 0.72, 
        0.65, 0.35, 0.80, 0.8, 0.72,
        0.65, 0.32, 0.80, 0.8, 0.72,

        0.35, 0.35, 0.80, 0.8, 0.72, 
        0.35, 0.32, 0.8, 0.8, 0.72,
        0.65, 0.32, 0.8, 0.8, 0.72,
    
    //TENGAH
    //SAYAP
        0.33, 0.2, 0.86, 0.8, 0.72,
        0.35, 0.2, 0.86, 0.8, 0.72, 
        0.35, 0.32, 0.86, 0.8, 0.72,

    //    0.15, 0.2, 0.86, 0.8, 0.72,
    //    0.85, 0.2, 0.86, 0.8, 0.72, 
    //    0.85, 0.32, 0.86, 0.8, 0.72,

    //    0.15, 0.2, 0.86, 0.8, 0.72,
    //    0.15, 0.32, 0.86, 0.8, 0.72, 
     //   0.85, 0.32, 0.86, 0.8, 0.72,

        0.67, 0.2, 0.5, 0.0, 0.0,
        0.65, 0.2, 0.6, 0.0, 0.0, 
        0.65, 0.32, 0.86, 0.8, 0.72,

        //TENGAH-TENGAH
            //kanan
            0.57, 0.32, 0.5, 0.6, 0.55,
            0.65, 0.26, 0.5, 0.6, 0.55, 
            0.65, 0.32, 0.5, 0.6, 0.55,

            0.57, 0.32, 0.86, 0.8, 0.72,
            0.57, 0.26, 0.86, 0.8, 0.72,
            0.65, 0.26, 0.86, 0.8, 0.72,

            0.57, 0.26, 0.6, 0.0, 0.0,
            0.65, 0.2, 0.6, 0.0, 0.0, 
            0.65, 0.26, 0.6, 0.0, 0.0,

            0.57, 0.26, 0.6, 0.0, 0.0,
            0.57, 0.2, 0.6, 0.0, 0.0,
            0.65, 0.2, 0.6, 0.0, 0.0,
            //kiri
            0.43, 0.26, 0.86, 0.8, 0.72,
            0.35, 0.26, 0.86, 0.8, 0.72,
            0.35, 0.2, 0.86, 0.8, 0.72,

            0.43, 0.26, 0.86, 0.8, 0.72,
            0.43, 0.2, 0.86, 0.8, 0.72,
            0.35, 0.2, 0.86, 0.8, 0.72,
            //loogo-biru
            0.43, 0.28, 0.0, 0.0, 0.72,
            0.35, 0.28, 0.0, 0.0, 0.72,
            0.35, 0.26, 0.0, 0.0, 0.72,

            0.43, 0.28, 0.0, 0.0, 0.72,
            0.43, 0.26, 0.0, 0.0, 0.72,
            0.35, 0.26, 0.0, 0.0, 0.72,
            //logo merah
            0.43, 0.32, 1.0, 0.0, 0.2,
            0.35, 0.32, 1.0, 0.0, 0.2,
            0.35, 0.28, 1.0, 0.0, 0.2,

            0.43, 0.32, 1.0, 0.0, 0.2,
            0.43, 0.28, 1.0, 0.0, 0.2,
            0.35, 0.28, 1.0, 0.0, 0.2,

            //tengah
            0.43, 0.32, 0.86, 0.8, 0.72,
            0.43, 0.26, 0.86, 0.8, 0.72,
            0.57, 0.26, 0.86, 0.8, 0.72,

            0.43, 0.32, 0.86, 0.8, 0.72,
            0.57, 0.32, 0.86, 0.8, 0.72,
            0.57, 0.26, 0.86, 0.8, 0.72,

            0.43, 0.26, 0.86, 0.8, 0.72,
            0.43, 0.2, 0.86, 0.8, 0.72,
            0.53, 0.2, 0.86, 0.8, 0.72,

            0.43, 0.26, 0.86, 0.8, 0.72,
            0.53, 0.26, 0.86, 0.8, 0.72,
            0.53, 0.2, 0.86, 0.8, 0.72,

            0.53, 0.23, 0.6, 0.0, 0.0,
            0.53, 0.2, 0.6, 0.0, 0.0,
            0.57, 0.2, 0.6, 0.0, 0.0,

            0.53, 0.23, 0.6, 0.0, 0.0,
            0.57, 0.23, 0.6, 0.0, 0.0,
            0.57, 0.2, 0.6, 0.0, 0.0,

            0.53, 0.23, 0.6, 0.0, 0.0,
            0.57, 0.26, 0.6, 0.0, 0.0,
            0.57, 0.23, 0.6, 0.0, 0.0,

            0.53, 0.26, 0.86, 0.8, 0.72,
            0.57, 0.26, 0.86, 0.8, 0.72,
            0.53, 0.23, 0.86, 0.8, 0.72,

            // TEEEEENGGGGAHHHHHHHHHHH
            //kanan + apel
            0.57, 0.2, 0.6, 0.0, 0.0,
            0.65, 0.1, 0.6, 0.0, 0.0, 
            0.65, 0.2, 0.6, 0.0, 0.0,

            0.57, 0.2, 0.6, 0.0, 0.0,
            0.57, 0.1, 0.6, 0.0, 0.0,
            0.65, 0.1, 0.6, 0.0, 0.0,

            0.53, 0.2, 0.6, 0.0, 0.0,
            0.57, 0.13, 0.6, 0.0, 0.0, 
            0.57, 0.2, 0.6, 0.0, 0.0,

            0.53, 0.2, 0.6, 0.0, 0.0,
            0.53, 0.13, 0.6, 0.0, 0.0,
            0.57, 0.13, 0.6, 0.0, 0.0,

            0.53, 0.13, 0.6, 0.0, 0.0,
            0.57, 0.1, 0.6, 0.0, 0.0, 
            0.57, 0.13, 0.6, 0.0, 0.0,

            0.53, 0.13, 0.86, 0.8, 0.72,
            0.53, 0.1, 0.86, 0.8, 0.72,
            0.57, 0.1, 0.86, 0.8, 0.72,
            //kiri
            0.35, 0.2, 0.86, 0.8, 0.72,
            0.35, 0.1, 0.86, 0.8, 0.72,
            0.38, 0.1, 0.86, 0.8, 0.72,

            0.35, 0.2, 0.86, 0.8, 0.72,
            0.38, 0.2, 0.86, 0.8, 0.72,
            0.38, 0.1, 0.86, 0.8, 0.72,
            //loogo-biru
            0.46, 0.12, 0.0, 0.0, 0.72,
            0.38, 0.12, 0.0, 0.0, 0.72,
            0.38, 0.1, 0.0, 0.0, 0.72,

            0.46, 0.12, 0.0, 0.0, 0.72,
            0.46, 0.1, 0.0, 0.0, 0.72,
            0.38, 0.1, 0.0, 0.0, 0.72,
            //logo merah
            0.46, 0.16, 1.0, 0.0, 0.2,
            0.38, 0.16, 1.0, 0.0, 0.2,
            0.38, 0.12, 1.0, 0.0, 0.2,

            0.46, 0.16, 1.0, 0.0, 0.2,
            0.46, 0.12, 1.0, 0.0, 0.2,
            0.38, 0.12, 1.0, 0.0, 0.2,
            //etc
            0.38, 0.2, 0.86, 0.8, 0.72,
            0.38, 0.16, 0.86, 0.8, 0.72,
            0.53, 0.16, 0.86, 0.8, 0.72,

            0.38, 0.2, 0.86, 0.8, 0.72,
            0.53, 0.2, 0.86, 0.8, 0.72,
            0.53, 0.16, 0.86, 0.8, 0.72,

            0.46, 0.16, 0.86, 0.8, 0.72,
            0.46, 0.1, 0.86, 0.8, 0.72,
            0.53, 0.1, 0.86, 0.8, 0.72,

            0.46, 0.16, 0.86, 0.8, 0.72,
            0.53, 0.16, 0.86, 0.8, 0.72,
            0.53, 0.1, 0.86, 0.8, 0.72,
            //MID MID
            0.35, 0.1, 0.72, 0.658, 0.59,
            0.35, 0, 0.72, 0.658, 0.59,
            0.65, 0, 0.72, 0.658, 0.59,

            0.35, 0.1, 0.72, 0.658, 0.59,
            0.65, 0.1, 0.72, 0.658, 0.59,
            0.65, 0, 0.72, 0.658, 0.59,

            //spesial sayap outliner
            0.33, 0.2, 0.86, 0.8, 0.72,
           0.35, 0.2, 0.86, 0.8, 0.72, 
          0.35, -0.4, 0.86, 0.8, 0.72,

           0.67, 0.1, 0.86, 0.8, 0.72,
           0.65, 0.1, 0.72, 0.658, 0.59,
          0.65, -0.4, 0.6, 0.0, 0.0,

          0.67, 0.1, 0.6, 0.0, 0.0,
           0.67, 0.2, 0.6, 0.0, 0.0,
          0.65, 0.1, 0.6, 0.0, 0.0,

          0.67, 0.2, 0.6, 0.0, 0.0,
           0.65, 0.2, 0.6, 0.0, 0.0,
          0.65, 0.1, 0.6, 0.0, 0.0,
          //BAWAAAAAAAHHHAHAHAHAHAHAHA
          //bawah
          0.35, -0.36, 0.5, 0.6, 0.55,
            0.35, -0.4, 0.5, 0.6, 0.55,
            0.65, -0.4, 0.5, 0.6, 0.55,

            0.35, -0.36, 0.5, 0.6, 0.55,
            0.65, -0.36, 0.5, 0.6, 0.55,
            0.65, -0.4, 0.5, 0.6, 0.55,
            //atas
            0.35, 0.0, 0.86, 0.8, 0.72,
            0.35, -0.03, 0.86, 0.8, 0.72,
            0.65, -0.03, 0.86, 0.8, 0.72,

            0.35, 0, 0.86, 0.8, 0.72,
            0.65, 0, 0.86, 0.8, 0.72,
            0.65, -0.03, 0.86, 0.8, 0.72,
            //middle (malas buat detail, nanti kalau ada waktu)
            0.35, -0.03, 0.6, 0.0, 0.0,
            0.35, -0.36, 0.6, 0.0, 0.0,
            0.65, -0.36, 0.6, 0.0, 0.0,

            0.35, -0.03, 0.6, 0.0, 0.0,
            0.65, -0.03, 0.6, 0.0, 0.0,
            0.65, -0.36, 0.6, 0.0, 0.0,
////////////////////////////////////////////////////////////////////////////////////////
    //copas modifikasi yg gerak+tutup botol
            -0.656, 0.4, 0.80, 0.8, 0.72, 
        -0.345, 0.4, 0.80, 0.8, 0.72,
        -0.345, 0.35, 0.80, 0.8, 0.72,

        -0.656, 0.4, 0.80, 0.8, 0.72, 
        -0.656, 0.35, 0.80, 0.8, 0.72,
        -0.345, 0.35, 0.80, 0.8, 0.72,
      //agak atas
        -0.65, 0.35, 0.80, 0.8, 0.72, 
        -0.35, 0.35, 0.80, 0.8, 0.72,
        -0.35, 0.32, 0.80, 0.8, 0.72,

        -0.65, 0.35, 0.80, 0.8, 0.72, 
        -0.65, 0.32, 0.8, 0.8, 0.72,
        -0.35, 0.32, 0.8, 0.8, 0.72,
    
    //TENGAH
    //SAYAP
        -0.67, 0.2, 0.86, 0.8, 0.72,
        -0.65, 0.2, 0.86, 0.8, 0.72, 
        -0.65, 0.32, 0.86, 0.8, 0.72,

    //    0.15, 0.2, 0.86, 0.8, 0.72,
    //    0.85, 0.2, 0.86, 0.8, 0.72, 
    //    0.85, 0.32, 0.86, 0.8, 0.72,

    //    0.15, 0.2, 0.86, 0.8, 0.72,
    //    0.15, 0.32, 0.86, 0.8, 0.72, 
     //   0.85, 0.32, 0.86, 0.8, 0.72,

        -0.33, 0.2, 0.5, 0.0, 0.0,
        -0.35, 0.2, 0.6, 0.0, 0.0, 
        -0.35, 0.32, 0.86, 0.8, 0.72,

        //TENGAH-TENGAH
            //kanan
            -0.43, 0.32, 0.5, 0.6, 0.55,
            -0.35, 0.26, 0.5, 0.6, 0.55, 
            -0.35, 0.32, 0.5, 0.6, 0.55,

            -0.43, 0.32, 0.86, 0.8, 0.72,
            -0.43, 0.26, 0.86, 0.8, 0.72,
            -0.35, 0.26, 0.86, 0.8, 0.72,

            -0.43, 0.26, 0.6, 0.0, 0.0,
            -0.35, 0.2, 0.6, 0.0, 0.0, 
            -0.35, 0.26, 0.6, 0.0, 0.0,

            -0.43, 0.26, 0.6, 0.0, 0.0,
            -0.43, 0.2, 0.6, 0.0, 0.0,
            -0.35, 0.2, 0.6, 0.0, 0.0,
            //kiri
            -0.57, 0.26, 0.86, 0.8, 0.72,
            -0.65, 0.26, 0.86, 0.8, 0.72,
            -0.65, 0.2, 0.86, 0.8, 0.72,

            -0.57, 0.26, 0.86, 0.8, 0.72,
            -0.57, 0.2, 0.86, 0.8, 0.72,
            -0.65, 0.2, 0.86, 0.8, 0.72,
            //loogo-biru
            -0.57, 0.28, 0.0, 0.0, 0.72,
            -0.65, 0.28, 0.0, 0.0, 0.72,
            -0.65, 0.26, 0.0, 0.0, 0.72,
            

            -0.57, 0.28, 0.0, 0.0, 0.72,
            -0.57, 0.26, 0.0, 0.0, 0.72,
            -0.65, 0.26, 0.0, 0.0, 0.72,
            //logo merah
            -0.57, 0.32, 1.0, 0.0, 0.2,
            -0.65, 0.32, 1.0, 0.0, 0.2,
            -0.65, 0.28, 1.0, 0.0, 0.2,

            -0.57, 0.32, 1.0, 0.0, 0.2,
            -0.57, 0.28, 1.0, 0.0, 0.2,
            -0.65, 0.28, 1.0, 0.0, 0.2,

            //tengah
            -0.57, 0.32, 0.86, 0.8, 0.72,
            -0.57, 0.26, 0.86, 0.8, 0.72,
            -0.43, 0.26, 0.86, 0.8, 0.72,

            -0.57, 0.32, 0.86, 0.8, 0.72,
            -0.43, 0.32, 0.86, 0.8, 0.72,
            -0.43, 0.26, 0.86, 0.8, 0.72,

            -0.57, 0.26, 0.86, 0.8, 0.72,
            -0.57, 0.2, 0.86, 0.8, 0.72,
            -0.47, 0.2, 0.86, 0.8, 0.72,

            -0.57, 0.26, 0.86, 0.8, 0.72,
            -0.47, 0.26, 0.86, 0.8, 0.72,
            -0.47, 0.2, 0.86, 0.8, 0.72,

            -0.47, 0.23, 0.6, 0.0, 0.0,
            -0.47, 0.2, 0.6, 0.0, 0.0,
            -0.43, 0.2, 0.6, 0.0, 0.0,

            -0.47, 0.23, 0.6, 0.0, 0.0,
            -0.43, 0.23, 0.6, 0.0, 0.0,
            -0.43, 0.2, 0.6, 0.0, 0.0,

            -0.47, 0.23, 0.6, 0.0, 0.0,
            -0.43, 0.26, 0.6, 0.0, 0.0,
            -0.43, 0.23, 0.6, 0.0, 0.0,

            -0.47, 0.26, 0.86, 0.8, 0.72,
            -0.43, 0.26, 0.86, 0.8, 0.72,
            -0.47, 0.23, 0.86, 0.8, 0.72,

            //botol
            -0.55, 0.26, 0.51, 0.47, 0.3,
            -0.43, 0.26, 0.51, 0.47, 0.3,
            -0.55, 0.23, 0.51, 0.47, 0.3,

            -0.43, 0.23, 0.51, 0.47, 0.3,
            -0.43, 0.26, 0.51, 0.47, 0.3,
            -0.55, 0.23, 0.51, 0.47, 0.3,

            -0.43, 0.26, 0.51, 0.47, 0.3,
            -0.43, 0.29, 0.51, 0.47, 0.3,
            -0.45, 0.26, 0.51, 0.47, 0.3,

            -0.55, 0.26, 0.51, 0.47, 0.3,
            -0.53, 0.26, 0.51, 0.47, 0.3,
            -0.55, 0.29, 0.51, 0.47, 0.3,

            -0.53, 0.32, 0.61, 0.57, 0.4,
            -0.55, 0.29, 0.61, 0.57, 0.4,
            -0.53, 0.29, 0.61, 0.57, 0.4,

            -0.45, 0.32, 0.61, 0.57, 0.4,
            -0.53, 0.26, 0.61, 0.57, 0.4,
            -0.45, 0.26, 0.61, 0.57, 0.4,

            -0.45, 0.32, 0.61, 0.57, 0.4,
            -0.53, 0.26, 0.61, 0.57, 0.4,
            -0.53, 0.32, 0.61, 0.57, 0.4,

            -0.45, 0.32, 0.61, 0.57, 0.4,
            -0.43, 0.29, 0.61, 0.57, 0.4,
            -0.45, 0.29, 0.61, 0.57, 0.4,

            -0.45, 0.26, 0.61, 0.57, 0.4,
            -0.43, 0.29, 0.61, 0.57, 0.4,
            -0.45, 0.29, 0.61, 0.57, 0.4,

            -0.53, 0.26, 0.61, 0.57, 0.4,
            -0.55, 0.29, 0.61, 0.57, 0.4,
            -0.53, 0.29, 0.61, 0.57, 0.4,

            // TEEEEENGGGGAHHHHHHHHHHH
            //kanan + apel
            -0.43, 0.2, 0.6, 0.0, 0.0,
            -0.35, 0.1, 0.6, 0.0, 0.0, 
            -0.35, 0.2, 0.6, 0.0, 0.0,

            -0.43, 0.2, 0.6, 0.0, 0.0,
            -0.43, 0.1, 0.6, 0.0, 0.0,
            -0.35, 0.1, 0.6, 0.0, 0.0,

            -0.47, 0.2, 0.6, 0.0, 0.0,
            -0.43, 0.13, 0.6, 0.0, 0.0, 
            -0.43, 0.2, 0.6, 0.0, 0.0,

            -0.47, 0.2, 0.6, 0.0, 0.0,
            -0.47, 0.13, 0.6, 0.0, 0.0,
            -0.43, 0.13, 0.6, 0.0, 0.0,

            -0.47, 0.13, 0.6, 0.0, 0.0,
            -0.43, 0.1, 0.6, 0.0, 0.0, 
            -0.43, 0.13, 0.6, 0.0, 0.0,

            -0.47, 0.13, 0.86, 0.8, 0.72,
            -0.47, 0.1, 0.86, 0.8, 0.72,
            -0.43, 0.1, 0.86, 0.8, 0.72,
            //kiri
            -0.65, 0.2, 0.86, 0.8, 0.72,
            -0.65, 0.1, 0.86, 0.8, 0.72,
            -0.62, 0.1, 0.86, 0.8, 0.72,

            -0.65, 0.2, 0.86, 0.8, 0.72,
            -0.62, 0.2, 0.86, 0.8, 0.72,
            -0.62, 0.1, 0.86, 0.8, 0.72,
            //loogo-biru
            -0.54, 0.12, 0.0, 0.0, 0.72,
            -0.62, 0.12, 0.0, 0.0, 0.72,
            -0.62, 0.1, 0.0, 0.0, 0.72,

            -0.54, 0.12, 0.0, 0.0, 0.72,
            -0.54, 0.1, 0.0, 0.0, 0.72,
            -0.62, 0.1, 0.0, 0.0, 0.72,
            //logo merah
            -0.54, 0.16, 1.0, 0.0, 0.2,
            -0.62, 0.16, 1.0, 0.0, 0.2,
            -0.62, 0.12, 1.0, 0.0, 0.2,

            -0.54, 0.16, 1.0, 0.0, 0.2,
            -0.54, 0.12, 1.0, 0.0, 0.2,
            -0.62, 0.12, 1.0, 0.0, 0.2,
            //etc
            -0.62, 0.2, 0.86, 0.8, 0.72,
            -0.62, 0.16, 0.86, 0.8, 0.72,
            -0.47, 0.16, 0.86, 0.8, 0.72,

            -0.62, 0.2, 0.86, 0.8, 0.72,
            -0.47, 0.2, 0.86, 0.8, 0.72,
            -0.47, 0.16, 0.86, 0.8, 0.72,

            -0.54, 0.16, 0.86, 0.8, 0.72,
            -0.54, 0.1, 0.86, 0.8, 0.72,
            -0.47, 0.1, 0.86, 0.8, 0.72,

            -0.54, 0.16, 0.86, 0.8, 0.72,
            -0.47, 0.16, 0.86, 0.8, 0.72,
            -0.47, 0.1, 0.86, 0.8, 0.72,
            //MID MID
            -0.65, 0.1, 0.72, 0.658, 0.59,
            -0.65, 0, 0.72, 0.658, 0.59,
            -0.35, 0, 0.72, 0.658, 0.59,

            -0.65, 0.1, 0.72, 0.658, 0.59,
            -0.35, 0.1, 0.72, 0.658, 0.59,
            -0.35, 0, 0.72, 0.658, 0.59,

            //spesial sayap outliner
            -0.67, 0.2, 0.86, 0.8, 0.72,
            -0.65, 0.2, 0.86, 0.8, 0.72, 
            -0.65, -0.4, 0.86, 0.8, 0.72,

            -0.33, 0.1, 0.86, 0.8, 0.72,
           -0.35, 0.1, 0.72, 0.658, 0.59,
           -0.35, -0.4, 0.6, 0.0, 0.0,

           -0.33, 0.1, 0.6, 0.0, 0.0,
           -0.33, 0.2, 0.6, 0.0, 0.0,
           -0.35, 0.1, 0.6, 0.0, 0.0,

           -0.33, 0.2, 0.6, 0.0, 0.0,
          -0.35, 0.2, 0.6, 0.0, 0.0,
          -0.35, 0.1, 0.6, 0.0, 0.0,
          //BAWAAAAAAAHHHAHAHAHAHAHAHA
          //bawah
          -0.65, -0.36, 0.5, 0.6, 0.55,
          -0.65, -0.4, 0.5, 0.6, 0.55,
          -0.35, -0.4, 0.5, 0.6, 0.55,

            -0.65, -0.36, 0.5, 0.6, 0.55,
            -0.35, -0.36, 0.5, 0.6, 0.55,
            -0.35, -0.4, 0.5, 0.6, 0.55,
            //atas
            -0.65, 0.0, 0.86, 0.8, 0.72,
            -0.65, -0.03, 0.86, 0.8, 0.72,
            -0.35, -0.03, 0.86, 0.8, 0.72,

            -0.65, 0, 0.86, 0.8, 0.72,
            -0.35, 0, 0.86, 0.8, 0.72,
            -0.35, -0.03, 0.86, 0.8, 0.72,
            //middle (malas buat detail, nanti kalau ada waktu)
            -0.65, -0.03, 0.6, 0.0, 0.0,
            -0.65, -0.36, 0.6, 0.0, 0.0,
            -0.35, -0.36, 0.6, 0.0, 0.0,

            -0.65, -0.03, 0.6, 0.0, 0.0,
            -0.35, -0.03, 0.6, 0.0, 0.0,
            -0.35, -0.36, 0.6, 0.0, 0.0,
    ];

    // Create a linked-list for storing the vertices data
    var buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);

    var vertexShaderSource = `
        attribute vec2 aPosition;
        attribute vec3 aColor;
        varying vec3 vColor;
        uniform vec2 uChange;
        void main() {
            gl_PointSize = 10.0;
            gl_Position = vec4(aPosition + uChange, 0.0, 1.0);
            vColor = aColor;
        }
    `;

    var fragmentShaderSource = `
        precision mediump float;
        varying vec3 vColor;
        void main() {
            gl_FragColor = vec4(vColor, 1.0);    // Yellow
        }
    `;

    // Create .c in GPU
    var vertexShader = gl.createShader(gl.VERTEX_SHADER);
    gl.shaderSource(vertexShader, vertexShaderSource);
    var fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(fragmentShader, fragmentShaderSource);

    // Compile .c into .o
    gl.compileShader(vertexShader);
    gl.compileShader(fragmentShader);

    // Prepare a .exe shell (shader program)
    var shaderProgram = gl.createProgram();

    // Put the two .o files into the shell
    gl.attachShader(shaderProgram, vertexShader);
    gl.attachShader(shaderProgram, fragmentShader);

    // Link the two .o files, so together they can be a runnable program/context.
    gl.linkProgram(shaderProgram);

    // Start using the context (analogy: start using the paints and the brushes)
    gl.useProgram(shaderProgram);

    // Teach the computer how to collect
    //  the positional values from ARRAY_BUFFER
    //  to each vertex being processed

    var aPosition = gl.getAttribLocation(shaderProgram, "aPosition");
    gl.vertexAttribPointer(
        aPosition, 
        2, 
        gl.FLOAT, 
        false, 
        5 * Float32Array.BYTES_PER_ELEMENT, 
        0
    );
    gl.enableVertexAttribArray(aPosition);

    var aColor = gl.getAttribLocation(shaderProgram, "aColor");
    gl.vertexAttribPointer(
        aColor, 
        3, 
        gl.FLOAT, 
        false, 
        5 * Float32Array.BYTES_PER_ELEMENT, 
        2 * Float32Array.BYTES_PER_ELEMENT
    );
    gl.enableVertexAttribArray(aColor);

    var freeze = false;
    // Apply some interaction using mouse
    function onMouseClick(event) {
        freeze = !freeze;
    }
    document.addEventListener("click", onMouseClick, false);

    var speed = [0, 0.0113]; //NRP 113
    // Create a uniform to animate the vertices
    var uChange = gl.getUniformLocation(shaderProgram, "uChange");
    var change = [0, 0];

    function render() {
        if (!freeze) {
            if(change[1]> 1 || change[1]<-1) speed[1] = -1*speed[1];
            change[1] = change[1] + speed[1];
            gl.clearColor(0.1, 0.1, 0.1, 1.0);
            gl.clear(gl.COLOR_BUFFER_BIT);
            gl.uniform2fv(uChange, change);
            gl.drawArrays(gl.TRIANGLES, 0, 156); //kanan
            gl.uniform2fv(uChange, [0, 0]);
            gl.drawArrays(gl.TRIANGLES, 156, 9999); //kiri
        }
        requestAnimationFrame(render);
    }   
    requestAnimationFrame(render);

}