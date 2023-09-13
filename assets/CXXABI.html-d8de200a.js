import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{r as l,o as c,c as d,a as s,b as n,d as e,e as r}from"./app-0c08762c.js";const o={},t={href:"https://github.com/TryGhost/node-sqlite3",target:"_blank",rel:"noopener noreferrer"},p=s("code",null,"/lib64/libstdc++.so.6: version CXXABI_1.3.8 not found",-1),u=r(`<h2 id="查看-libstdc-so-6-包含的-cxxabi-版本" tabindex="-1"><a class="header-anchor" href="#查看-libstdc-so-6-包含的-cxxabi-版本" aria-hidden="true">#</a> 查看 libstdc++.so.6 包含的 CXXABI 版本</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 查看本地 CXXABI 所有可用版本</span>
strings /usr/lib64/libstdc++.so.6 <span class="token operator">|</span> <span class="token function">grep</span> CXXABI

<span class="token comment"># 输出如下，未发现 1.3.8 版本</span>
CXXABI_1.3
CXXABI_1.3.1
CXXABI_1.3.2
CXXABI_1.3.3
CXXABI_1.3.4
CXXABI_1.3.5
CXXABI_1.3.6
CXXABI_1.3.7
CXXABI_TM_1

<span class="token comment"># 找寻本机其他新版本库</span>
<span class="token function">find</span> / <span class="token parameter variable">-name</span> libstdc++.so.* 

<span class="token comment"># 输出如下</span>
/usr/share/gdb/auto-load/usr/lib64/libstdc++.so.6.0.19-gdb.pyc
/usr/share/gdb/auto-load/usr/lib64/libstdc++.so.6.0.19-gdb.py
/usr/share/gdb/auto-load/usr/lib64/libstdc++.so.6.0.19-gdb.pyo
/usr/share/gdb/auto-load/usr/lib/libstdc++.so.6.0.19-gdb.pyc
/usr/share/gdb/auto-load/usr/lib/libstdc++.so.6.0.19-gdb.py
/usr/share/gdb/auto-load/usr/lib/libstdc++.so.6.0.19-gdb.pyo
/usr/lib/libstdc++.so.6.0.19
/usr/lib/libstdc++.so.6

<span class="token comment"># 如果发现有 libstdc++.so.6 高版本，把这个库软连接到 /usr/lib64/ 即可</span>
<span class="token builtin class-name">cd</span> /usr/lib64
<span class="token function">mv</span> libstdc++.so.6 libstdc++.so.6.bake   <span class="token comment"># 备份老库</span>
<span class="token function">ln</span> <span class="token parameter variable">-s</span> /usr/local/gcc-9.3.0/lib64/libstdc++.so.6 ./


<span class="token comment"># 查看本地 CXXABI 所有可用版本</span>
strings /usr/lib64/libstdc++.so.6 <span class="token operator">|</span> <span class="token function">grep</span> CXXABI
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果为发现 libstdc++.so.6 高版本，则接着往下。</p><h2 id="centos7-编译升级gcc至9-3-0" tabindex="-1"><a class="header-anchor" href="#centos7-编译升级gcc至9-3-0" aria-hidden="true">#</a> CentOS7 编译升级GCC至9.3.0</h2><h3 id="下载gcc9-3-0源码并解压" tabindex="-1"><a class="header-anchor" href="#下载gcc9-3-0源码并解压" aria-hidden="true">#</a> 下载GCC9.3.0源码并解压</h3><p>由于官网下载速度慢，使用清华大学的镜像站进行下载，代码如下:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">wget</span> <span class="token parameter variable">-c</span> /opt/tmp/ https://mirrors.tuna.tsinghua.edu.cn/gnu/gcc/gcc-9.3.0/gcc-9.3.0.tar.gz

<span class="token comment"># 考虑到安装失败的可能性，创建一个临时文件夹来安装GCC</span>
<span class="token function">sudo</span> <span class="token function">mkdir</span> /opt/tmp
<span class="token builtin class-name">cd</span> /opt/tmp

<span class="token comment"># 解压安装包到临时文件夹里</span>
<span class="token function">sudo</span> <span class="token function">tar</span> <span class="token parameter variable">-zxvf</span> /home/paul/Downloads/gcc-9.3.0.tar.gz 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="下载依赖文件" tabindex="-1"><a class="header-anchor" href="#下载依赖文件" aria-hidden="true">#</a> 下载依赖文件</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> gcc-9.3.0/

<span class="token comment"># 下载gmp mpfr mpc等供编译需求的依赖项</span>
./contrib/download_prerequisites    
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行命令会出现如下的错误，可能原因是从清华大学镜像下的安装包有过改动，不能通过sha512验证</p><blockquote><p>gmp-6.1.0.tar.bz2: FAILED</p><p>sha512sum: WARNING: 1 computed checksum did NOT match</p><p>error: Cannot verify integrity of possibly corrupted file gmp-6.1.0.tar.bz2</p></blockquote><p>查看download_prerequisites源码后, 在gcc-9.3.0目录下输入以下命令:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 删除上一命令安装失败产生的gmp压缩包和目录</span>
<span class="token function">rm</span> gmp-6.1.0.tar.bz2 
<span class="token function">rm</span> gmp-6.1.0

<span class="token comment"># 加--noverify选项禁止边下边验证</span>
./contrib/download_prerequisites --no-verify
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="创建预编译目录" tabindex="-1"><a class="header-anchor" href="#创建预编译目录" aria-hidden="true">#</a> 创建预编译目录</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">mkdir</span>  build  <span class="token operator">&amp;&amp;</span>  <span class="token builtin class-name">cd</span> build
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="设置编译选项并编译" tabindex="-1"><a class="header-anchor" href="#设置编译选项并编译" aria-hidden="true">#</a> 设置编译选项并编译</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">..</span>/configure <span class="token parameter variable">--prefix</span><span class="token operator">=</span>/usr/local/gcc-9.3.0 --enable-bootstrap --enable-checking<span class="token operator">=</span>release --enable-languages<span class="token operator">=</span>c,c++ --disable-multilib

<span class="token comment"># –-enable-languages表示你要让你的gcc支持哪些编程语言;</span>
<span class="token comment"># -–disable-multilib表示编译器不编译成其他平台的可执行代码;</span>
<span class="token comment"># -–disable-checking表示生成的编译器在编译过程中不做额外检查;</span>
<span class="token comment"># –-enable-checking=xxx 表示编译过程中增加XXX检查;</span>
<span class="token comment"># –prefix=/usr/local/gcc-9.3.0 指定安装路径;</span>
<span class="token comment"># –enable-bootstrap 表示用第一次编译生成的程序进行第二次编译，然后用再次生成的程序进行第三次编译，并且检查比较第二次和第三次结果的正确性，也就是进行冗余的编译检查工作。 非交叉编译环境下，默认已经将该值设为 enable，可以不用显示指定；交叉编译环境下，需要显示将其值设为 disable。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个过程会比较长久，我的编译了 3个 多小时。</p><h3 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 编译生成makefile文件</span>
<span class="token function">make</span>

<span class="token comment"># 安装GCC</span>
<span class="token function">sudo</span> <span class="token function">make</span> <span class="token function">install</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="安装后的设置" tabindex="-1"><a class="header-anchor" href="#安装后的设置" aria-hidden="true">#</a> 安装后的设置</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 设置环境变量</span>
<span class="token function">touch</span> /etc/profile.d/gcc.sh
<span class="token function">sudo</span> <span class="token function">chmod</span> <span class="token number">777</span> /etc/profile.d/gcc.sh 
<span class="token function">sudo</span> <span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&#39;\\nexport PATH=/usr/local/gcc-9.3.0/bin:$PATH\\n&#39;</span> <span class="token operator">&gt;&gt;</span> /etc/profile.d/gcc.sh <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">source</span> /etc/profile.d/gcc.sh

<span class="token comment"># 设置头文件</span>
<span class="token function">sudo</span> <span class="token function">ln</span> <span class="token parameter variable">-sv</span> /usr/local/gcc/include/ /usr/include/gcc

<span class="token comment"># 设置库文件</span>
<span class="token function">touch</span> /etc/ld.so.conf.d/gcc.conf
<span class="token function">sudo</span> <span class="token function">chmod</span> <span class="token number">777</span> /etc/ld.so.conf.d/gcc.conf 
<span class="token function">sudo</span> <span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;/usr/local/gcc/lib64&quot;</span> <span class="token operator">&gt;&gt;</span> /etc/ld.so.conf.d/gcc.conf

<span class="token comment"># 加载动态连接库</span>
<span class="token function">sudo</span> ldconfig <span class="token parameter variable">-v</span>
ldconfig <span class="token parameter variable">-p</span> <span class="token operator">|</span><span class="token function">grep</span> gcc
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="测试版本号" tabindex="-1"><a class="header-anchor" href="#测试版本号" aria-hidden="true">#</a> 测试版本号</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 测试</span>
gcc <span class="token parameter variable">-v</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>敲入命令后，终端显示如下文字，说明已成功安装 GCC9.3.0 。</p><blockquote><p>Using built-in specs.</p><p>COLLECT_GCC=gcc</p><p>COLLECT_LTO_WRAPPER=/usr/local/gcc-9.3.0/libexec/gcc/x86_64-pc-linux-gnu/9.3.0/lto-wrapper</p><p>Target: x86_64-pc-linux-gnu</p><p>Configured with: ../configure --prefix=/usr/local/gcc-9.3.0 --enable-bootstrap --enable-checking=release --enable-languages=c,c++ --disable-multilib</p><p>Thread model: posix</p><p>gcc version 9.3.0 (GCC)</p></blockquote><p>接下来按照 查看 libstdc++.so.6 包含的 CXXABI 版本 执行：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 查看本地 CXXABI 所有可用版本</span>
strings /usr/lib64/libstdc++.so.6 <span class="token operator">|</span> <span class="token function">grep</span> CXXABI

<span class="token comment"># 输出如下，未发现 1.3.8 版本</span>
CXXABI_1.3
CXXABI_1.3.1
CXXABI_1.3.2
CXXABI_1.3.3
CXXABI_1.3.4
CXXABI_1.3.5
CXXABI_1.3.6
CXXABI_1.3.7
CXXABI_TM_1

<span class="token comment"># 找寻本机其他新版本库</span>
<span class="token function">find</span> / <span class="token parameter variable">-name</span> libstdc++.so.* 

<span class="token comment"># 输出如下</span>
/usr/share/gdb/auto-load/usr/lib64/libstdc++.so.6.0.19-gdb.pyc
/usr/share/gdb/auto-load/usr/lib64/libstdc++.so.6.0.19-gdb.py
/usr/share/gdb/auto-load/usr/lib64/libstdc++.so.6.0.19-gdb.pyo
/usr/share/gdb/auto-load/usr/lib/libstdc++.so.6.0.19-gdb.pyc
/usr/share/gdb/auto-load/usr/lib/libstdc++.so.6.0.19-gdb.py
/usr/share/gdb/auto-load/usr/lib/libstdc++.so.6.0.19-gdb.pyo
/usr/lib/libstdc++.so.6.0.19
/usr/lib/libstdc++.so.6

<span class="token comment"># 如果发现有 libstdc++.so.6 高版本，把这个库软连接到 /usr/lib64/ 即可</span>
<span class="token builtin class-name">cd</span> /usr/lib64
<span class="token function">mv</span> libstdc++.so.6 libstdc++.so.6.bake   <span class="token comment"># 备份老库</span>
<span class="token function">ln</span> <span class="token parameter variable">-s</span> /usr/local/gcc-9.3.0/lib64/libstdc++.so.6 ./

<span class="token comment"># 查看本地 CXXABI 所有可用版本</span>
strings /usr/lib64/libstdc++.so.6 <span class="token operator">|</span> <span class="token function">grep</span> CXXABI
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>参考：</p>`,29),b={href:"https://zhuanlan.zhihu.com/p/559881339",target:"_blank",rel:"noopener noreferrer"},v={href:"https://blog.csdn.net/pauljjf/article/details/105171154",target:"_blank",rel:"noopener noreferrer"};function m(g,h){const a=l("ExternalLinkIcon");return c(),d("div",null,[s("p",null,[n("当在 CentOS 7 安装 "),s("a",t,[n("sqlite3"),e(a)]),n(" 时会遇到 "),p,n(" 报错的问题，下面罗列出我的解决流程：")]),u,s("ol",null,[s("li",null,[s("a",b,[n("/lib64/libstdc++.so.6: version `CXXABI_1.3.8‘ not found 解决指南"),e(a)])]),s("li",null,[s("a",v,[n("CentOS7 编译升级GCC至9.3.0"),e(a)])])])])}const X=i(o,[["render",m],["__file","CXXABI.html.vue"]]);export{X as default};
