<?php
require_once __DIR__.'/db.php';
if(session_status()===PHP_SESSION_NONE){session_name(SESSION_NAME);session_start();}
function h($v){return htmlspecialchars((string)$v,ENT_QUOTES,'UTF-8');}
function redirect($p){header('Location: '.BASE_URL.$p);exit;}
function flash($k,$m=null){if($m!==null){$_SESSION['flash'][$k]=$m;return;}if(isset($_SESSION['flash'][$k])){$x=$_SESSION['flash'][$k];unset($_SESSION['flash'][$k]);return $x;}return null;}
function current_user(){if(empty($_SESSION['user_id']))return null;$s=db()->prepare('SELECT * FROM users WHERE id=?');$s->execute([$_SESSION['user_id']]);return $s->fetch();}
function require_login(){if(!current_user())redirect('/login.php');}
function has_role($roles){$u=current_user();if(!$u)return false;if(is_string($roles))$roles=[$roles];return in_array($u['role'],$roles);}
function require_admin(){if(!has_role(['super_admin','admin','membership_admin','village_admin','finance_admin','content_admin']))redirect('/admin/login.php');}
function require_role($roles){if(!has_role($roles)){flash('error','No permission.');redirect('/admin/index.php');}}
function csrf_token(){if(empty($_SESSION['csrf']))$_SESSION['csrf']=bin2hex(random_bytes(32));return $_SESSION['csrf'];}
function check_csrf(){if($_SERVER['REQUEST_METHOD']==='POST' && (!isset($_POST['csrf'])||!hash_equals($_SESSION['csrf']??'',$_POST['csrf'])))die('Security check failed');}
function setting($k,$d=''){try{$s=db()->prepare('SELECT setting_value FROM site_settings WHERE setting_key=?');$s->execute([$k]);$r=$s->fetch();return $r?$r['setting_value']:$d;}catch(Exception $e){return $d;}}
function set_setting($k,$v){$s=db()->prepare('INSERT INTO site_settings(setting_key,setting_value) VALUES(?,?) ON DUPLICATE KEY UPDATE setting_value=VALUES(setting_value)');$s->execute([$k,$v]);}
function make_ref($p){return $p.'-'.date('Y').'-'.strtoupper(substr(bin2hex(random_bytes(4)),0,8));}
function make_member_no(){$c=(int)db()->query('SELECT COUNT(*) c FROM memberships')->fetch()['c']+1;return 'FHBF-'.date('Y').'-'.str_pad($c,6,'0',STR_PAD_LEFT);}
function village_price($t,$is){$s=db()->prepare('SELECT price_member,price_non_member FROM village_space_types WHERE name=?');$s->execute([$t]);$r=$s->fetch();return $r?($is?$r['price_member']:$r['price_non_member']):0;}
function send_reset_email($email,$link){return @mail($email,'FHBF password reset',"Reset link: ".$link,'From: '.EMAIL_FROM);}
?>