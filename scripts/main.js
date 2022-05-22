// Function untuk insert angka dan operator
function insert(num){
    $('.input-display').val($('.input-display').val() + num);
};

// Function untuk mengeksekusi dan menampilkan hasil 
function equal(){
    $('.input-display').val(eval($('.input-display').val()))
}

// Function untuk mereset semua input
function reset(){
    $('.input-display').val('');
}

// Function untuk menghapus satu karakter / operator
function backspace(){
    value = $('.input-display').val();
    $('.input-display').val(value.substring(0, value.length - 1));
}