
// 手机号码格式转化为 344 格式 （188 3886 9199）
function phoneSeparated(tel) {
  tel = tel.substring(0, 3) + ' ' + tel.substring(3, 7) + ' ' + tel.substring(7, 11);
  return tel;
}

$('#phone').val(phoneSeparated($('#phone').val()));

$('#phone').blur(function(){
  $('#phone').val(phoneSeparated($('#phone').val()))
})