import{_ as i,o as a,c as n,a3 as l}from"./chunks/framework.QX3Xs2QT.js";const o=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"font-end/tools/nginx.md","filePath":"font-end/tools/nginx.md"}'),e={name:"font-end/tools/nginx.md"};function p(t,s,h,k,r,E){return a(),n("div",null,s[0]||(s[0]=[l(`<h2 id="nginx发行版本" tabindex="-1">nginx发行版本 <a class="header-anchor" href="#nginx发行版本" aria-label="Permalink to &quot;nginx发行版本&quot;">​</a></h2><blockquote><p>最干净的、最原始的、没有其他额外功能的版本（只有最基本的功能：web服务器、反向代理、负载均衡）：</p></blockquote><ul><li>nginx开源版：<a href="http://nginx.org" target="_blank" rel="noreferrer">http://nginx.org</a></li></ul><blockquote><p>在nginx基础上的拓展版本，在nginx基础上的二次开发版本</p></blockquote><ul><li>nginx plus 商业版【收费：全家桶】：<a href="https://www.nginx.com" target="_blank" rel="noreferrer">https://www.nginx.com</a></li><li>openresty【免费：基于Lua】：<a href="http://openresty.org/cn/" target="_blank" rel="noreferrer">http://openresty.org/cn/</a></li><li>tengine【免费：基于c】：<a href="http://tengine.taobao.org/" target="_blank" rel="noreferrer">http://tengine.taobao.org/</a></li></ul><h2 id="nginx目录结构" tabindex="-1">nginx目录结构 <a class="header-anchor" href="#nginx目录结构" aria-label="Permalink to &quot;nginx目录结构&quot;">​</a></h2><ul><li>conf 配置文件</li><li>html 包</li><li>logs 日志 <ul><li>access.log 访问日志（占用存储大）</li><li>error.log</li><li>nginx.pid 主进程id（一个主进程master，多个子进程worker。可用<code>ps -ef|grep nginx</code>查看nginx状态）</li></ul></li><li>sbin 运行程序</li></ul><h2 id="相关命令" tabindex="-1">相关命令 <a class="header-anchor" href="#相关命令" aria-label="Permalink to &quot;相关命令&quot;">​</a></h2><p>nginx</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">./nginx</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   # 启动nginx</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">./nginx</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -s</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> stop</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 快速关闭Nginx，可能不保存相关信息，并迅速终止web服务。 </span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">./nginx</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -s</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> quit</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 平稳关闭Nginx，保存相关信息，有安排的结束web服务。 </span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">./nginx</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -s</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> reload</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 因改变了Nginx相关配置，需要重新加载配置而重载。</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">./nginx</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -t</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 不运行，而仅仅测试配置文件。</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">./nginx</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -v</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 显示 nginx 的版本。 </span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">./nginx</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -V</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 显示 nginx 的版本，编译器版本和配置参数</span></span></code></pre></div><p>关闭防火墙</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">firewall-cmd</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --state</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 查看默认防火墙状态（关闭后显示no running，开启后显示running）</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">systemctl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> stop</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> firewalld.service</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 关闭防火墙</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">systemctl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> disable</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> firewalld.service</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 禁止防火墙开机启动</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">service</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> iptables</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> status</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 查看防火墙是否启动</span></span></code></pre></div><p>端口</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">netstat</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -apn</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   # 查看所有端口号</span></span></code></pre></div><h2 id="基于nginx开源版" tabindex="-1">基于nginx开源版 <a class="header-anchor" href="#基于nginx开源版" aria-label="Permalink to &quot;基于nginx开源版&quot;">​</a></h2><h3 id="nginx配置" tabindex="-1">nginx配置 <a class="header-anchor" href="#nginx配置" aria-label="Permalink to &quot;nginx配置&quot;">​</a></h3><h4 id="最小配置" tabindex="-1">最小配置 <a class="header-anchor" href="#最小配置" aria-label="Permalink to &quot;最小配置&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>worker_processes  1;   #开启的worker进程数,通常设置成和cpu的数量相等</span></span>
<span class="line"><span>events {</span></span>
<span class="line"><span>    worker_connections  1024; #每个worker进程的最大并发连接数 </span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>http {</span></span>
<span class="line"><span>    include       mime.types; #引入文件，类型</span></span>
<span class="line"><span>    default_type  application/octet-stream; #默认类型</span></span>
<span class="line"><span>    sendfile        on;</span></span>
<span class="line"><span>    keepalive_timeout  65;</span></span>
<span class="line"><span>    server {</span></span>
<span class="line"><span>        listen       80;</span></span>
<span class="line"><span>        server_name  localhost;</span></span>
<span class="line"><span>	    location / {</span></span>
<span class="line"><span>            root   html/main/dist;</span></span>
<span class="line"><span>            index  index.html index.htm;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        error_page   500 502 503 504  /50x.html;</span></span>
<span class="line"><span>        location = /50x.html {</span></span>
<span class="line"><span>            root   html;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h4 id="多站点-从上到下匹配-保证【域名-端口号】唯一" tabindex="-1">多站点：从上到下匹配；保证【域名+端口号】唯一 <a class="header-anchor" href="#多站点-从上到下匹配-保证【域名-端口号】唯一" aria-label="Permalink to &quot;多站点：从上到下匹配；保证【域名+端口号】唯一&quot;">​</a></h4><ol><li><p>多端口</p><p>server { listen 80; server_name localhost; location / { root html/<a href="http://www.hexueyi.com" target="_blank" rel="noreferrer">www.hexueyi.com</a>; index index.html index.htm; } }</p><p>server { listen 81; server_name localhost; location / { root html/a.hexueyi.com; index index.html index.htm; } }</p><p>server { listen 82; server_name localhost; location / { root html/b.hexueyi.com; index index.html index.htm; } }</p></li><li><p>多域名（前提是要注册好域名）</p><p>server { listen 80; server_name localhost; location / { root html/<a href="http://www.hexueyi.com" target="_blank" rel="noreferrer">www.hexueyi.com</a>; index index.html index.htm; } }</p><p>server { listen 80; server_name a.hexueyi.com; location / { root html/a.hexueyi.com; index index.html index.htm; } }</p><p>server { listen 80; server_name b.hexueyi.com; location / { root html/b.hexueyi.com; index index.html index.htm; } }</p></li></ol><h4 id="server-name-配置" tabindex="-1">server_name 配置 <a class="header-anchor" href="#server-name-配置" aria-label="Permalink to &quot;server\\_name 配置&quot;">​</a></h4><ol><li>可以写域名，可以写IP地址</li><li>可以用空格隔开多个域名，指向同一个站点 <code>server_name a.hexueyi.com b.hexueyi.com;</code></li><li>通配符*匹配 <code>server_name *.hexueyi.com;</code></li><li>正则匹配</li></ol><h4 id="域名解析架构" tabindex="-1">域名解析架构 <a class="header-anchor" href="#域名解析架构" aria-label="Permalink to &quot;域名解析架构&quot;">​</a></h4><ol><li>多用户二级域名： 例如 a.hexueyi.com b.hexueyi.com 访问匹配泛解析 *.hexueyi.com， 后端拿到相应的资源给nginx反向代理给客户端</li><li>短网址</li><li>httpdns： 适用于app等cs架构</li></ol><h4 id="反向代理-proxy-pass" tabindex="-1">反向代理 proxy_pass <a class="header-anchor" href="#反向代理-proxy-pass" aria-label="Permalink to &quot;反向代理 proxy\\_pass&quot;">​</a></h4><ol><li><p>写在 location 内，要么是proxy_pass要么是root+index</p></li><li><p>写法是完整的url</p><p>server { listen 80; server_name localhost; location / { proxy_pass <a href="https://www.baidu.com" target="_blank" rel="noreferrer">https://www.baidu.com</a>; # 访问时跳转到该url了 # root html/<a href="http://www.hexueyi.com" target="_blank" rel="noreferrer">www.hexueyi.com</a>; # index index.html index.htm; } }</p><p>server { listen 80; server_name localhost; location / { proxy_pass <a href="http://a.hexueyi.com" target="_blank" rel="noreferrer">http://a.hexueyi.com</a>; # 访问时跳转到该url了 # root html/<a href="http://www.hexueyi.com" target="_blank" rel="noreferrer">www.hexueyi.com</a>; # index index.html index.htm; } }</p><p>server { listen 80; server_name localhost; location / { proxy_pass <a href="http://192.168.1.120" target="_blank" rel="noreferrer">http://192.168.1.120</a>; # 访问时跳转到该url了 # root html/<a href="http://www.hexueyi.com" target="_blank" rel="noreferrer">www.hexueyi.com</a>; # index index.html index.htm; } }</p></li></ol><h4 id="负载均衡" tabindex="-1">负载均衡 <a class="header-anchor" href="#负载均衡" aria-label="Permalink to &quot;负载均衡&quot;">​</a></h4><h5 id="轮询策略-upstream" tabindex="-1">轮询策略 upstream <a class="header-anchor" href="#轮询策略-upstream" aria-label="Permalink to &quot;轮询策略 upstream&quot;">​</a></h5><ol><li><p>单纯使用时无法保持会话，需要后端支持</p><p>upstream httpds{ server 192.168.1.101; #后台服务（集群） server 192.168.1.102; #后台服务（集群） } server { listen 80; server_name <a href="http://www.hexueyi.com" target="_blank" rel="noreferrer">www.hexueyi.com</a>; location / { proxy_pass <a href="http://httpds" target="_blank" rel="noreferrer">http://httpds</a>; } }</p></li></ol><h5 id="权重-weight-根据具体配置优劣分配负载比例" tabindex="-1">权重 weight 根据具体配置优劣分配负载比例 <a class="header-anchor" href="#权重-weight-根据具体配置优劣分配负载比例" aria-label="Permalink to &quot;权重 weight 根据具体配置优劣分配负载比例&quot;">​</a></h5><pre><code>upstream httpds{
	server 192.168.1.101 weight=7;
	server 192.168.1.102 weight=3;
}
server {
    listen       80;
    server_name  www.hexueyi.com;
    location / {
        proxy_pass http://httpds;
    }
}
</code></pre><p>停止参与负载 down （少）</p><pre><code>upstream httpds{
	server 192.168.1.101 weight=7 down;
	server 192.168.1.102 weight=3;
}
server {
    listen       80;
    server_name  www.hexueyi.com;
    location / {
        proxy_pass http://httpds;
    }
}
</code></pre><p>备份机 backup</p><pre><code>upstream httpds{
	server 192.168.1.101 weight=7;
	server 192.168.1.102 weight=3; 
	server 192.168.1.103 backup; # 其他机子正常情况下不会被轮询到，只有其他机子宕机了才会被轮询
}
server {
    listen       80;
    server_name  www.hexueyi.com;
    location / {
        proxy_pass http://httpds;
    }
}
</code></pre><h4 id="防盗链" tabindex="-1">防盗链 <a class="header-anchor" href="#防盗链" aria-label="Permalink to &quot;防盗链&quot;">​</a></h4><h4 id="高可用-keepalived-ip漂移" tabindex="-1">高可用 keepalived ip漂移 <a class="header-anchor" href="#高可用-keepalived-ip漂移" aria-label="Permalink to &quot;高可用 keepalived ip漂移&quot;">​</a></h4><h4 id="https-非对称加密-sa证书" tabindex="-1">https 非对称加密 sa证书 <a class="header-anchor" href="#https-非对称加密-sa证书" aria-label="Permalink to &quot;https 非对称加密 sa证书&quot;">​</a></h4><h4 id="配置" tabindex="-1">配置 <a class="header-anchor" href="#配置" aria-label="Permalink to &quot;配置&quot;">​</a></h4><div class="language-cmd vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">cmd</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">#运行用户</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">user www</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">data;    </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">#启动进程,通常设置成和cpu的数量相等</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">worker_processes  </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">​</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">#全局错误日志及PID文件</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">error_log  /var/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">/nginx/error.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">pid        /var/run/nginx.pid;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">​</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">#工作模式及连接数上限</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">events {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    use   epoll;             #epoll是多路复用IO(I/O Multiplexing)中的一种方式,但是仅用于linux2.6以上内核,可以大大提高nginx的性能</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    worker_connections  </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1024</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;#单个后台worker process进程的最大并发链接数</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    # multi_accept on; </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">​</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">#设定http服务器，利用它的反向代理功能提供负载均衡支持</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">http {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">     #设定mime类型,类型由mime.type文件定义</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    include       /etc/nginx/mime.types;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    default_type  </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">application</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">/octet</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">stream;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    #设定日志格式</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    access_log    /var/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">/nginx/access.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">​</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    #sendfile 指令指定 nginx 是否调用 sendfile 函数（zero copy 方式）来输出文件，对于普通应用，</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    #必须设为 on,如果用来进行下载等应用磁盘IO重负载应用，可设置为 off，以平衡磁盘与网络I/O处理速度，降低系统的uptime.</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    sendfile        on;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    #tcp_nopush     on;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">​</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    #连接超时时间</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    #keepalive_timeout  </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    keepalive_timeout  </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">65</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    tcp_nodelay        on;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    #开启gzip压缩</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    gzip  on;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    gzip_disable </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;MSIE [1-6]\\.(?!.*SV1)&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">​</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    #设定请求缓冲</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    client_header_buffer_size    1k;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    large_client_header_buffers  </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">4</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 4k;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">​</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    include /etc/nginx/conf.d/</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.conf;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    include /etc/nginx/sites</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">enabled/</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">​</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    #设定负载均衡的服务器列表</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">     upstream mysvr {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        #weigth参数表示权值，权值越高被分配到的几率越大</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        #本机上的Squid开启3128端口</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        server</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 192.168.8.1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3128</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> weight</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        server</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 192.168.8.2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">80</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  weight</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        server</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 192.168.8.3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">80</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  weight</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">6</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">​</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">   server</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">       #监听80端口</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        listen       </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">80</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        #定义使用www.javaqf.com访问</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        server_name  www.javaqf.com;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">​</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        #设定本虚拟主机的访问日志</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        access_log  logs/www.javaqf.com.access.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  main;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">​</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    #默认请求</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    location / {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          root   /root;      #定义服务器的默认网站根目录位置</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          index index.php index.html index.htm;   #定义首页索引文件的名称</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">​</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          fastcgi_pass  www.javaqf.com;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">         fastcgi_param  SCRIPT_FILENAME  $document_root/$fastcgi_script_name; </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          include /etc/nginx/fastcgi_params;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">​</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    # 定义错误提示页面</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    error_page   </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">500</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 502</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 503</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 504</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /50x.html;  </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        location </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /50x.html {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        root   /root;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">​</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    #静态文件，nginx自己处理</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    location </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">~</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ^/(images|javascript|js|css|flash|media|static)/ {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        root /var/www/virtual/htdocs;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        #过期30天，静态文件不怎么更新，过期可以设大一点，如果频繁更新，则可以设置得小一点。</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        expires</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 30d;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    #PHP 脚本请求全部转发到 FastCGI处理. 使用FastCGI默认配置.</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    location </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">~</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> \\.php</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">$</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        root /root;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        fastcgi_pass </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">127.0.0.1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">9000</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        fastcgi_index index.php;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        fastcgi_param SCRIPT_FILENAME /home/www/www$fastcgi_script_name;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        include fastcgi_params;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    #设定查看Nginx状态的地址</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    location /NginxStatus {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        stub_status            on;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        access_log              on;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        auth_basic              </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;NginxStatus&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        auth_basic_user_file  conf/htpasswd;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    #禁止访问 .htxxx 文件</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    location </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">~</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /\\.ht {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        deny all;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">     </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">     }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div>`,40)]))}const c=i(e,[["render",p]]);export{o as __pageData,c as default};
