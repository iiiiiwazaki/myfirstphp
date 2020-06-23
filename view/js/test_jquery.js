var key_event = $.Event('keyup'); 

// イベント発動時に「Fキーを押す」の登録
  key_event.keyCode = 49;
  key_event.which = 49; 

// イベントの発動
  $("#post_textbox").trigger (key_event); 