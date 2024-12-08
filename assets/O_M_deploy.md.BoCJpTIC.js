import{_ as a,o as n,c as i,a3 as p}from"./chunks/framework.QX3Xs2QT.js";const g=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"O&M/deploy.md","filePath":"O&M/deploy.md"}'),l={name:"O&M/deploy.md"};function e(t,s,h,k,r,d){return n(),i("div",null,s[0]||(s[0]=[p(`<h2 id="linux常用命令" tabindex="-1">linux常用命令 <a class="header-anchor" href="#linux常用命令" aria-label="Permalink to &quot;linux常用命令&quot;">​</a></h2><h3 id="文件管理" tabindex="-1">文件管理 <a class="header-anchor" href="#文件管理" aria-label="Permalink to &quot;文件管理&quot;">​</a></h3><p>命令格式：命令 选项 参数</p><div class="language-cmd vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">cmd</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">clear</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> #清屏，或者用快捷键 ctrl</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">l</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">cd /root    #cd到绝对路径或相对路径</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">pwd     #打印当前路径</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ls      #列出当前目录下的</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ls /    #列出指定目录（/）下的</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ls </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">l   #详细列出</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ll      #同上（详细列出）</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ls </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">l / #详细列出指定目录（/）下的</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ls </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">a   #查看所有文件，包含隐藏文件</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">touch a/a.txt #创建文件，a目录需要存在</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">mkdir a     #创建路径</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">mkdir </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">p /a/b/c #连着创建目录，当创建的目录没有上一级的时候会自动创建上一级目录</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">mkdir /home/{a,b,c} #在home下创建a,b,c目录</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">cp 源文件路径 目标目录 #复制文件：cp /a/a.txt /b</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">cp </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">r 源目录 目标目录 #复制整个目录：cp </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">r /a /</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">mv 源文件或目录 目标路径 #剪贴</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">mv  /root/桌面/v/b /root/桌面 #移动b文件夹到桌面上</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">mv  /root/桌面/v/b /root/桌面/t #移动并重命名</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">rm 文件或目录 #删除 （慎用）</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">rm </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">rf 文件或目录 #强制删除</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">rm </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">rf /root/a/</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> #删除a目录下的所有文件和文件夹</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">rm </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">rf /root/a/q</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> #删除a目录下以q开头发所有文件和文件夹</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">rm </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">rf /root/a  /root/b #删除a和b目录</span></span></code></pre></div><div class="language-cmd vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">cmd</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">cat 文件 #查看文件内容（全部看完）</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">more 文件 #查看文件内容（一点一点的看）</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">grep 关键字 文件 #查看过滤文件内容（筛选关键字所在的行）</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ls </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">l  / </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> b.txt # ls </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">l  / 命令输出的内容写到 b.txt 中</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">gedit 文件 #图形编辑器（linux下的图形编辑器编辑器，是有ui的linux系统才行）</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">vim 文件 #命令行编辑文件内容</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">按下 i 进入插入模式（光标在当前）</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">按下 o 进入插入模式（光标换行）</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">按下 Esc 退出编辑模式：</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    按下 :wq 保存并退出（w是保存，q是退出）</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    按下 :q</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 强制退出（不保存修改）</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">按下 : 进入末行模式</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    :</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">set </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">nu 显示行号</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    :</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">set </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">nonu 取消行号</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    :</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">set </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">list 显示控制字符</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">按下 yy 复制一行</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">按下 p 粘贴</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">按下 dd 删除一行</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">按下 3yy 复制3行，按下 3dd 删除3行</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">按下 u 撤销</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">按下 x 删除一个字符</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">按下 v 进入可视模式，可以进行多选，</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    按下 y 复制，然后按下 p 粘贴</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    按下 d 删除</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">按下 </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> $</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 行首行尾</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">gg G 页首页尾</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">3G 去第三行</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">按下 / 进入末行，再按下 abc 即 /abc ，再按下回车即可再文件中查找abc，按下 n 即可查找下一个</span></span></code></pre></div><p>vim 是一个程序 cd 是一个命令，由shell程序提供的</p><h3 id="用户管理" tabindex="-1">用户管理 <a class="header-anchor" href="#用户管理" aria-label="Permalink to &quot;用户管理&quot;">​</a></h3><h4 id="用户信息相关文件" tabindex="-1">用户信息相关文件 <a class="header-anchor" href="#用户信息相关文件" aria-label="Permalink to &quot;用户信息相关文件&quot;">​</a></h4><ol><li>基本信息文件（/etc/passwd）</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/etc/passwd文件，每一行是一个用户信息</span></span>
<span class="line"><span></span></span>
<span class="line"><span>root\\:x:0:0\\:root:/root:/bin/bash</span></span>
<span class="line"><span>hxy\\:x:1000:1000\\:hxy:/home/hxy:/bin/bash</span></span>
<span class="line"><span>用户名\\:x:uid\\:gid:描述\\:HOME\\:shell</span></span>
<span class="line"><span></span></span>
<span class="line"><span>用户名：登录系统的用户名</span></span>
<span class="line"><span>x:密码占位符</span></span>
<span class="line"><span>uid:用户id号（超管root：0，系统用户：1\\~499，普通用户：1000+）</span></span>
<span class="line"><span>gid:用户组id号</span></span>
<span class="line"><span>HOME:用户目录</span></span>
<span class="line"><span>/bin/bash：shell命令解释器      /sbin/nologin：不能登录系统</span></span></code></pre></div><ol><li>密码信息文件（/etc/shadow）</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>root:\`$6$\`i89G.LdyVDDU97HL\\$I9ePzlzRvIsor0Vue0iNgEY3Wnjw7.TUBhdZUXAdmr8rxL3zfKEz.n./cv7.qlqbJTmB7QaT1rRmVlHT0ATNg/::0:99999:7:::</span></span></code></pre></div><ol><li>组信息文件（/etc/group）</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>root\\:x:0:</span></span>
<span class="line"><span>wheel\\:x:10\\:hxy</span></span>
<span class="line"><span>hxy\\:x:1000:</span></span>
<span class="line"><span>组名:组密码:组ID:组成员</span></span></code></pre></div><h4 id="用户管理操作" tabindex="-1">用户管理操作 <a class="header-anchor" href="#用户管理操作" aria-label="Permalink to &quot;用户管理操作&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>*   查询用户</span></span>
<span class="line"><span>    \`id 用户名\`</span></span>
<span class="line"><span>*   创建用户</span></span>
<span class="line"><span>    \`useradd 用户名\`  默认uid是递增分配的</span></span>
<span class="line"><span>    \`useradd 用户名 -u 1500 -d /vip\`  指定uid 指定家目录</span></span>
<span class="line"><span>    \`useradd --help\` 查看命令用法</span></span>
<span class="line"><span>*   修改密码（普通用户只能改自己的密码）</span></span>
<span class="line"><span>    \`passwd\`  修改当前用户的密码</span></span>
<span class="line"><span>    \`passwd 用户名\` 修改其他用户的密码</span></span>
<span class="line"><span>*   删除用户</span></span>
<span class="line"><span>    \`userdel -r 用户名\`  -r是删除主目录和邮件池（邮件文件位于 /var/spool/mail/{用户名}）</span></span>
<span class="line"><span>*   修改</span></span>
<span class="line"><span>    \`usermod -s /sbin/nologin 用户名\` 修改登录shell，使其无法登录</span></span>
<span class="line"><span>    \`usermod 用户名 -g 主组名 -G 附加组名\` 修改主组和附加组</span></span></code></pre></div><h4 id="用户组管理操作" tabindex="-1">用户组管理操作 <a class="header-anchor" href="#用户组管理操作" aria-label="Permalink to &quot;用户组管理操作&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>*   添加组</span></span>
<span class="line"><span>    \`groupadd 组名\`</span></span>
<span class="line"><span>    \`groupadd 组名 -g 2000\` 指定gid</span></span>
<span class="line"><span>*   删除组</span></span>
<span class="line"><span>    \`groupdel 组名\`</span></span>
<span class="line"><span>*   查询组</span></span>
<span class="line"><span>    \`grep 组名 /etc/group\`</span></span></code></pre></div><h4 id="提权" tabindex="-1">提权 <a class="header-anchor" href="#提权" aria-label="Permalink to &quot;提权&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>\`su root\`   切换root用户</span></span>
<span class="line"><span>\`sudo 命令\` 以管理员的权限执行某命令（需要先在配置文件/etc/sudoers配置）</span></span></code></pre></div><h3 id="用户权限" tabindex="-1">用户权限 <a class="header-anchor" href="#用户权限" aria-label="Permalink to &quot;用户权限&quot;">​</a></h3><h4 id="基本权限-ugo" tabindex="-1">基本权限（UGO） <a class="header-anchor" href="#基本权限-ugo" aria-label="Permalink to &quot;基本权限（UGO）&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>权限对象：</span></span>
<span class="line"><span>u: 用户</span></span>
<span class="line"><span>g: 组</span></span>
<span class="line"><span>o: 其他人</span></span>
<span class="line"><span>a: 包含 ugo 所有</span></span>
<span class="line"><span></span></span>
<span class="line"><span>权限的三中类型：</span></span>
<span class="line"><span>读：r=4</span></span>
<span class="line"><span>写: w=2</span></span>
<span class="line"><span>执行: x=1</span></span>
<span class="line"><span></span></span>
<span class="line"><span>更改权限：</span></span>
<span class="line"><span>使用符号</span></span>
<span class="line"><span></span></span>
<span class="line"><span>chmod     \\[u|g|o|a]\\[+|-|=]\\[r|w|x]    目录|文件</span></span>
<span class="line"><span></span></span>
<span class="line"><span>chmod u+r a.txt</span></span>
<span class="line"><span>chmod a=rw a.txt</span></span>
<span class="line"><span></span></span>
<span class="line"><span>使用数字（第一个数字代表u，第二个数字代表g，第三个数字代表o）</span></span>
<span class="line"><span></span></span>
<span class="line"><span>chmod 777 目录|文件</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 查看文件，ll</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    -rw-r--r--. 1 root root 0 10月  3 21:57 file</span></span>
<span class="line"><span>    drwxr-xr-x. 2 root root 6 10月  3 22:01 dir</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    类型和权限（11位）：</span></span>
<span class="line"><span>       rwx    rwx     rwx</span></span>
<span class="line"><span>       属主   属组    其他</span></span>
<span class="line"><span>    链接：快捷方式（数量）</span></span>
<span class="line"><span>    属主</span></span>
<span class="line"><span>    属组</span></span>
<span class="line"><span>    大小</span></span>
<span class="line"><span></span></span>
<span class="line"><span>更改属主、属组：</span></span>
<span class="line"><span>chown 新用户名.新组名  文件</span></span>
<span class="line"><span>chown 新用户名  文件</span></span>
<span class="line"><span>chown .新组名  文件</span></span></code></pre></div><h4 id="基本权限-acl" tabindex="-1">基本权限（ACL） <a class="header-anchor" href="#基本权限-acl" aria-label="Permalink to &quot;基本权限（ACL）&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>\`setfacl -m u:用户名:权限 文件\`     m是修改</span></span>
<span class="line"><span>\`setfacl -m g:组名:权限 文件\`</span></span>
<span class="line"><span></span></span>
<span class="line"><span>\`getfacl 文件\`  查看权限</span></span></code></pre></div><h3 id="文件查找和压缩" tabindex="-1">文件查找和压缩 <a class="header-anchor" href="#文件查找和压缩" aria-label="Permalink to &quot;文件查找和压缩&quot;">​</a></h3><h4 id="查找" tabindex="-1">查找 <a class="header-anchor" href="#查找" aria-label="Permalink to &quot;查找&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>查找命令位置：\`which 命令\`，如 \`which cd\`。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>查找文件位置：</span></span>
<span class="line"><span>\`find [path...] [options] [expression] [action]\`</span></span>
<span class="line"><span></span></span>
<span class="line"><span>\`find /etc -name &#39;hosts&#39;\`</span></span>
<span class="line"><span></span></span>
<span class="line"><span>按文件名找：</span></span>
<span class="line"><span>\`find /etc -name hosts\`</span></span>
<span class="line"><span>\`find /etc -iname hosts\`   // 不区分大小写</span></span>
<span class="line"><span>\`find /etc -iname hos*\`</span></span>
<span class="line"><span></span></span>
<span class="line"><span>按文件大小找：</span></span>
<span class="line"><span>\`find /etc -size +5M\` // 大于5M的文件</span></span>
<span class="line"><span>\`find /etc -size -5M\` // 小于5M的文件</span></span>
<span class="line"><span>\`find /etc -size 5M\` // 等于5M的文件</span></span></code></pre></div><h4 id="压缩解压" tabindex="-1">压缩解压 <a class="header-anchor" href="#压缩解压" aria-label="Permalink to &quot;压缩解压&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>\`tar 选项 打的包名 被打的对象\`</span></span>
<span class="line"><span></span></span>
<span class="line"><span>\`tar -cf etc.tar /etc\`  // c是create,f是file，打包没有压缩</span></span>
<span class="line"><span>\`tar -czf etc.tar.gz /etc\` // z是gzip，使用gzip压缩</span></span>
<span class="line"><span>\`tar -xf nginx.tar.gz\` // x是解压，到当前目录</span></span>
<span class="line"><span>\`tar -xf nginx.tar.gz -C /tmp\` // x是解压，到/tmp目录</span></span></code></pre></div><h2 id="centos7部署gitlab记录" tabindex="-1">centos7部署gitlab记录 <a class="header-anchor" href="#centos7部署gitlab记录" aria-label="Permalink to &quot;centos7部署gitlab记录&quot;">​</a></h2><p>参考：</p><p><a href="https://www.cnblogs.com/yizhiweiyan/p/13155408.html" target="_blank" rel="noreferrer">https://www.cnblogs.com/yizhiweiyan/p/13155408.html</a></p><p>centos7的yum设置国内源</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 安装 wegt</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yum</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -y</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> wget</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 备份</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">mv</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /etc/yum.repos.d/CentOS-Base.repo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /etc/yum.repos.d/CentOS-Base.repo.backup</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 下载国内yum源配置文件到/etc/yum.repos.d/</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">wget</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -O</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /etc/yum.repos.d/CentOS-Base.repo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> http://mirrors.aliyun.com/repo/Centos-7.repo</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 清理yum缓存，并生成新的缓存</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yum</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> clean</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> all</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yum</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> makecache</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 更新yum源检查是否生效</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yum</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> update</span></span></code></pre></div><p>gitlab安装</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 安装并配置必要的依赖</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yum</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -y</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> curl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> policycoreutils-python</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> openssh-server</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">systemctl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> enable</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> sshd</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">systemctl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> start</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> sshd</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># CentOS7系统中，在防火墙打开场景下，打开HTTP, HTTPS和SSH访问（gitlab默认端口）</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">firewall-cmd</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --permanent</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --add-service=http</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">firewall-cmd</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --permanent</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --add-service=https</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">systemctl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> reload</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> firewalld</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 安装Postfix，用来发送通知邮件</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yum</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> postfix</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">systemctl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> enable</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> postfix</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">systemctl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> start</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> postfix</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 配置清华镜像安装gitlab</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">touch</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /etc/yum.repos.d/gitlab-ce.repo</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yum</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -y</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> vim</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">*</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 安装vim，若没有</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">vim</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /etc/yum.repos.d/gitlab-ce.repo</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 编辑内容</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[gitlab-ce]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">name</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Gitlab</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> CE</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Repository</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">baseurl</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">https://mirrors.tuna.tsinghua.edu.cn/gitlab-ce/yum/el</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$releasever</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">gpgcheck</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">0</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">enabled</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">1</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># yum安装GitLab社区版</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yum</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> makecache</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yum</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> gitlab-ce</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 更改配置</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">vim</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /etc/gitlab/gitlab.rb</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 更改如下</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">external_url</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;http://192.167.174.11:9091&#39;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">nginx[</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">&#39;listen_port&#39;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">]</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 9091</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 开放端口 9091 9092</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">firewall-cmd</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --zone=public</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --add-port=9091/tcp</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --permanent</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">systemctl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> reload</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> firewalld</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 更新配置</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">gitlab-ctl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> reconfigure</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 配置后会提示用户名 root ，密码在 /etc/gitlab/initial_root_password</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 登录管理员账号后修改密码: asdfzxcv</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 手动启停</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">gitlab-ctl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> start</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">gitlab-ctl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> stop</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">gitlab-ctl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> restart</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#开机启动</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">systemctl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> enable</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> gitlab-runsvdir.service</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#禁止开机自启动</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">systemctl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> disable</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> gitlab-runsvdir.service</span></span></code></pre></div><h2 id="centos7部署gitlab-cicd" tabindex="-1">centos7部署gitlab+cicd <a class="header-anchor" href="#centos7部署gitlab-cicd" aria-label="Permalink to &quot;centos7部署gitlab+cicd&quot;">​</a></h2><h3 id="nvm" tabindex="-1">nvm <a class="header-anchor" href="#nvm" aria-label="Permalink to &quot;nvm&quot;">​</a></h3><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">wget</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://github.com/nvm-sh/nvm/archive/refs/tags/v0.38.0.tar.gz</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">mkdir</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -p</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /root/.nvm</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">tar</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -zxvf</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> nvm-0.38.0.tar.gz</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -C</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /root/.nvm</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">vim</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ~/.bashrc</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">添加以下内容</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> NVM_DIR</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$HOME</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/.nvm/nvm-0.38.0&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[ </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-s</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$NVM_DIR</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/nvm.sh&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ] &amp;&amp; </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">\\.</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$NVM_DIR</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/nvm.sh&quot;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># This loads nvm</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[ </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-s</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$NVM_DIR</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/bash_completion&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ] &amp;&amp; </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">\\.</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$NVM_DIR</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/bash_completion&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  </span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># This loads nvm bash_completion</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># nodejs下载更换淘宝镜像</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> NVM_NODEJS_ORG_MIRROR</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">https://npm.taobao.org/mirrors/node</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">source</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ~/.bashrc</span></span></code></pre></div><h3 id="node" tabindex="-1">node <a class="header-anchor" href="#node" aria-label="Permalink to &quot;node&quot;">​</a></h3><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">nvm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 16</span></span></code></pre></div><h3 id="nginx" tabindex="-1">nginx <a class="header-anchor" href="#nginx" aria-label="Permalink to &quot;nginx&quot;">​</a></h3><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Nginx依赖于gcc的编译环境</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yum</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> gcc-c++</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Nginx的http模块需要使用pcre来解析正则表达式</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yum</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -y</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pcre</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pcre-devel</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 安装依赖的解压包</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yum</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -y</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> zlib</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> zlib-devel</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># ssl 功能需要 openssl 库，安装 openssl</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yum</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -y</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> openssl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> openssl-devel</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">去官网下载nginx后</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">cd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /opt</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">tar</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -zxvf</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> nginx-1.24.0.tar.gz</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">cd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> nginx-1.24.0</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">./configure</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --prefix=/opt/nginx</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">make</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">make</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 开放端口</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">firewall-cmd</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --zone=public</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --add-port=80/tcp</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --permanent</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">systemctl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> restart</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> firewalld</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 启动nginx</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">cd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /opt/sbin</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">./nginx</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 查看进程</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ps</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -ef</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> grep</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> nginx</span></span></code></pre></div><h3 id="gitlab" tabindex="-1">gitlab <a class="header-anchor" href="#gitlab" aria-label="Permalink to &quot;gitlab&quot;">​</a></h3><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yum</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -y</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://mirrors.tuna.tsinghua.edu.cn/gitlab-ce/yum/el7/gitlab-ce-14.3.0-ce.0.el7.x86_64.rpm</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">vim</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /etc/gitlab/gitlab.rb</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">修改</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">external_url</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;http://ip:1874&#39;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 开放端口</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">firewall-cmd</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --zone=public</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --add-port=1874/tcp</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --permanent</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">systemctl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> restart</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> firewalld</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 启动gitlab服务</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> gitlab-ctl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> start</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># gitlab服务停止</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> gitlab-ctl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> stop</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 重启gitlab服务</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> gitlab-ctl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> restart</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 访问gitlab，用root和默认密码登录，登录后修改密码</span></span></code></pre></div><h3 id="配置cicd" tabindex="-1">配置CICD <a class="header-anchor" href="#配置cicd" aria-label="Permalink to &quot;配置CICD&quot;">​</a></h3><h4 id="gitlab-runner" tabindex="-1">gitlab-runner <a class="header-anchor" href="#gitlab-runner" aria-label="Permalink to &quot;gitlab-runner&quot;">​</a></h4><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 下载</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">wget</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -O</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /usr/local/bin/gitlab-runner</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://gitlab-runner-downloads.s3.amazonaws.com/latest/binaries/gitlab-runner-linux-amd64</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 分配运行权限</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">chmod</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> +x</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /usr/local/bin/gitlab-runner</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 创建用户</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">useradd</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --comment</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;GitLab Runner&#39;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --create-home</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> gitlab-runner</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --shell</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /bin/bash</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 安装</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">gitlab-runner</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --user=gitlab-runner</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --working-directory=/home/gitlab-runner</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 运行</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">gitlab-runner</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> start</span></span></code></pre></div><h4 id="注册-runner" tabindex="-1">注册 runner <a class="header-anchor" href="#注册-runner" aria-label="Permalink to &quot;注册 runner&quot;">​</a></h4><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 注册 runner</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">gitlab-runner</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> register</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 输入 gitlab 的访问地址</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">http://192.168.174.152:1874/</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 输入 runner token，把开 http://192.168.26.139:1874/admin/runners 页面查看</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">63AyFAthj7s7sNy3JDwu</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># runner 描述，随便填</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">测试webpack-vue项目部署</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># runner tag</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">webpack-vue-cicd</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 输入（选择） shell</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">shell</span></span></code></pre></div><h4 id="普通用户安装" tabindex="-1">普通用户安装 <a class="header-anchor" href="#普通用户安装" aria-label="Permalink to &quot;普通用户安装&quot;">​</a></h4><blockquote><p><a href="https://blog.csdn.net/u014646950/article/details/121233990" target="_blank" rel="noreferrer">Linux下普通用户gitlab-runner_linux gitlab runner_Datrilla的博客-CSDN博客</a></p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>mkdir -p  \${HOME}/local/bin</span></span>
<span class="line"><span>cd    \${HOME}/local/bin</span></span>
<span class="line"><span>#重命名</span></span>
<span class="line"><span>cp gitlab-runner-linux-amd64  gitlab-runner</span></span>
<span class="line"><span>chmod +x   gitlab-runner</span></span>
<span class="line"><span>#设置路径到普通用户配置下</span></span>
<span class="line"><span>cd ~</span></span>
<span class="line"><span>vi .bash_profile</span></span>
<span class="line"><span>export PATH=\${HOME}/local/bin:\${PATH}</span></span>
<span class="line"><span>#刷新配置</span></span>
<span class="line"><span>source .bash_profile</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#用户模式后台运行，如果可以增加crontab自动启动等限制，未运行会stuck</span></span>
<span class="line"><span>nohup gitlab-runner run &amp; &gt;/dev/null</span></span></code></pre></div><h4 id="gitlab-ci-yml" tabindex="-1">gitlab-ci.yml <a class="header-anchor" href="#gitlab-ci-yml" aria-label="Permalink to &quot;gitlab-ci.yml&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># 阶段</span></span>
<span class="line"><span>stages:</span></span>
<span class="line"><span>  - build</span></span>
<span class="line"><span>  - deploy</span></span>
<span class="line"><span>  # 缓存 node_modules 减少打包时间，默认会清除 node_modules 和 dist </span></span>
<span class="line"><span>cache:</span></span>
<span class="line"><span>  paths:</span></span>
<span class="line"><span>    - node_modules/</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span># 拉取项目，打包</span></span>
<span class="line"><span>build:</span></span>
<span class="line"><span>  stage: build # 阶段名称 对应，stages</span></span>
<span class="line"><span>  tags: # runner 标签(注册runner时设置的，可在 admin-&gt;runner中查看)</span></span>
<span class="line"><span>    - vue-cicd</span></span>
<span class="line"><span>  script: # 脚本（执行的命令行）</span></span>
<span class="line"><span>    - cd \${CI_PROJECT_DIR} # 拉取项目的根目录</span></span>
<span class="line"><span>    - npm install # 安装依赖</span></span>
<span class="line"><span>    - npm run build # 运行构建命令</span></span>
<span class="line"><span>  only:</span></span>
<span class="line"><span>    - master #拉取分支</span></span>
<span class="line"><span>  artifacts:   # 把 dist 的内容传递给下一个阶</span></span>
<span class="line"><span>    paths:</span></span>
<span class="line"><span>        - dist/</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 部署</span></span>
<span class="line"><span>deploy:</span></span>
<span class="line"><span>  stage: deploy # 阶段名称 对应，stages</span></span>
<span class="line"><span>  tags: # runner 标签(注册runner时设置的)</span></span>
<span class="line"><span>    - vue-cicd</span></span>
<span class="line"><span>  script: # 脚本（执行的命令行）</span></span>
<span class="line"><span>    - rm -rf /opt/nginx/html/*</span></span>
<span class="line"><span>    - cp -rf \${CI_PROJECT_DIR}/dist/* /opt/nginx/html/ # 把包完成，复制 dist 下的文件到对应的项目位置</span></span></code></pre></div>`,56)]))}const F=a(l,[["render",e]]);export{g as __pageData,F as default};
