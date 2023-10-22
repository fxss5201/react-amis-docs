import{_ as p}from"./plugin-vue_export-helper-c27b6911.js";import{r as i,o as c,c as r,a as s,b as n,d as a,w as o,e as l}from"./app-e6e2cbb0.js";const u="/assets/20231015161531-36a58976.png",d="/assets/20231015163133-af35d0c5.png",k="/assets/20231015173838-73ea95e1.png",v="/assets/20231015210032-301094db.png",m="/assets/20231015211254-a0c9b8f2.png",g={},b=l('<p>一般项目内很多逻辑都是增删改查的逻辑，所以泛积木-低代码提供了通过配置生成增删改查（会直接生成数据表+页面，并支持配置页面内的搜索内容）。</p><h2 id="crud生成器" tabindex="-1"><a class="header-anchor" href="#crud生成器" aria-hidden="true">#</a> CRUD生成器</h2><p>配置生成增删改查 放在菜单 <strong>系统设置</strong> / <strong>CRUD生成器</strong> 内，我们先看页面内容：</p><figure><img src="'+u+'" alt="CRUD生成器" tabindex="0" loading="lazy"><figcaption>CRUD生成器</figcaption></figure><p>我们可以在页面内新增、查看、复制配置，不支持编辑和删除。并且可以在页面内进行目录、名称、标识等的快速搜索。</p><p>从页面上我们可以看出每个CRUD生成器都有3个主要内容，页面信息、数据库表、页面搜索，接下来我们详细查看下：</p><h3 id="页面信息" tabindex="-1"><a class="header-anchor" href="#页面信息" aria-hidden="true">#</a> 页面信息</h3><figure><img src="'+d+'" alt="页面信息" tabindex="0" loading="lazy"><figcaption>页面信息</figcaption></figure><p>首先配置的页面信息和新增页面的时候一样，需要页面所属目录、页面类型、页面名称、页面标识、菜单隐藏、页面启用、页面对外、页面访问权限、页面编辑权限、页面删除权限，<strong>当页面所属目录未填写的时候，会添加在顶层菜单</strong>。</p><h3 id="数据表信息" tabindex="-1"><a class="header-anchor" href="#数据表信息" aria-hidden="true">#</a> 数据表信息</h3><figure><img src="'+k+'" alt="数据表信息" tabindex="0" loading="lazy"><figcaption>数据表信息</figcaption></figure><p>上面罗列了一些举例数据，其中名称、中文名称、类型是必填项，各个字段的详细描述如下：</p><ol><li>名称：英文驼峰格式，对应数据表字段名称；</li><li>中文名称：中文格式，用于页面对应字段的展示；</li><li>类型：对应数据表的字段类型，现在支持 <code>int, float, double, varchar, text, longtext, datetime</code> 这几种数据结构；</li><li>长度：字符串长度，仅类型为 <code>varchar</code> 时生效，用于定义数据表字段的长度，并且页面输入框的限制字符长度；</li><li>精度：小数位数，仅类型为 <code>float, double</code> 之一时生效，类型 <code>int</code> 时，精度为 0；</li><li>不是null：勾选则不是null，数据表字段必填，页面上表单内的字段也会添加必填校验，接口对应的字段新增的时候也必须必填；</li><li>根据当前时间戳更新：对应数据表的根据当前时间戳更新；</li><li>注释：对应数据表的注释；</li><li>对应数据字典：可选择系统中的数据字典作为下拉选择项，并且页面中会直接引用对应数据字典值；</li><li>对应数据：<strong>必须配置为json数据结构，自行保证结构格式</strong>，用于作为下拉选择项，优先级大于 对应数据字典。</li></ol>',13),q={href:"https://aisuda.bce.baidu.com/amis/zh-CN/components/form/options",target:"_blank",rel:"noopener noreferrer"},h=s("code",null,"labelField",-1),_=s("code",null,"label",-1),f=s("code",null,"valueField",-1),E=s("code",null,"value",-1),A=l(`<div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token property">&quot;label&quot;</span><span class="token operator">:</span> <span class="token string">&quot;显示内容&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token string">&quot;值&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token property">&quot;label&quot;</span><span class="token operator">:</span> <span class="token string">&quot;显示内容&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token string">&quot;值&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  ...
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当然如果要使用其他字段的话也是可以的，例如：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;显示内容&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;值&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;显示内容&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;值&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  ...
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),x=s("code",null,"labelField",-1),y=s("code",null,"valueField",-1),D={href:"https://aisuda.bce.baidu.com/amis/zh-CN/components/form/options#%E9%80%89%E9%A1%B9%E6%A0%87%E7%AD%BE%E5%AD%97%E6%AE%B5-labelfield",target:"_blank",rel:"noopener noreferrer"},B=l(`<div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;label&quot;</span><span class="token operator">:</span> <span class="token string">&quot;选项&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;select&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;select&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;labelField&quot;</span><span class="token operator">:</span> <span class="token string">&quot;name&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;valueField&quot;</span><span class="token operator">:</span> <span class="token string">&quot;id&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;options&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;A&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;a&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;B&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;b&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;C&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;c&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>创建者、创建时间、更新者、更新时间不用添加，系统会自动添加。</strong></p><p>可以通过上下拖拽排序，这里的排序顺序会影响生成的数据表字段的顺序、页面内表格列的顺序、新增编辑表单内的顺序。</p><h3 id="页面搜索项" tabindex="-1"><a class="header-anchor" href="#页面搜索项" aria-hidden="true">#</a> 页面搜索项</h3><figure><img src="`+v+'" alt="页面搜索项" tabindex="0" loading="lazy"><figcaption>页面搜索项</figcaption></figure><p>上面罗列了一些举例数据，其中名称是必填项，各个字段的详细描述如下：</p><ol><li>名称：对应数据表信息内的名称；</li><li>搜索方式：<code>int, float, double, varchar, text, longtext</code> 类型的搜索方式，支持 全等搜索 和 模糊搜索，不配置则默认为 <strong>全等搜索</strong>；</li><li>单选或多选：当数据配置的为 数据字典、对应数据、创建者、更新者 的时候，可以配置单选或多选搜索，不配置则默认为 <strong>单选搜索</strong>，单选或多选搜索都为 <strong>全等搜索</strong>，不支持 模糊搜索；</li><li>日期搜索方式：<code>datetime</code> 类型的搜索方式，支持 年月日搜索 和 年月日范围搜索，不配置则默认为 <strong>年月日搜索</strong>。</li></ol><h3 id="页面中的权限说明" tabindex="-1"><a class="header-anchor" href="#页面中的权限说明" aria-hidden="true">#</a> 页面中的权限说明</h3>',8),F=s("h2",{id:"扩展使用",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#扩展使用","aria-hidden":"true"},"#"),n(" 扩展使用")],-1),C=s("p",null,[n("如果某些数据的录入需要单独在其他页面内，可以在菜单新增页面，将CRUD生成页面内的新增按钮弹窗内的表单代码复制出来，直接放在新页面的 "),s("code",null,"body"),n(" 内，既可以在其他页面进行数据录入。")],-1),j=s("figure",null,[s("img",{src:m,alt:"页面搜索项",tabindex:"0",loading:"lazy"}),s("figcaption",null,"页面搜索项")],-1),R={href:"https://jimu.fxss.work/#/admin/page/testCrudAdd",target:"_blank",rel:"noopener noreferrer"},z={href:"https://jimu.fxss.work/#/admin/page/testCrud",target:"_blank",rel:"noopener noreferrer"};function N(U,w){const t=i("ExternalLinkIcon"),e=i("RouterLink");return c(),r("div",null,[b,s("p",null,[n("对应数据一般用于"),s("a",q,[n("下拉框"),a(t)]),n("，为了方便使用，其"),h,n("选项显示字段为"),_,n("，"),f,n("选项值字段为"),E,n("，所以以如下结构是最方便使用的：")]),A,s("p",null,[n("则这个时候需要配置 "),x,n(" 和 "),y,n(" 字段，例如 "),s("a",D,[n("选项标签字段 labelField"),a(t)]),n("，")]),B,s("ol",null,[s("li",null,[n("新增按钮：拥有页面访问权限即有权限，可以通过 "),a(e,{to:"/use/abutment.html#%E9%A1%B5%E9%9D%A2%E4%B8%AD%E7%9A%84%E6%9D%83%E9%99%90%E4%BF%A1%E6%81%AF"},{default:o(()=>[n("页面中的权限信息")]),_:1}),n(" 配置调整；")]),s("li",null,[n("表格操作栏：拥有页面编辑权限或者页面删除权限才会显示，可以通过 "),a(e,{to:"/use/abutment.html#%E9%A1%B5%E9%9D%A2%E4%B8%AD%E7%9A%84%E6%9D%83%E9%99%90%E4%BF%A1%E6%81%AF"},{default:o(()=>[n("页面中的权限信息")]),_:1}),n(" 配置调整； "),s("ol",null,[s("li",null,[n("编辑：拥有页面编辑权限才会显示，可以通过 "),a(e,{to:"/use/abutment.html#%E9%A1%B5%E9%9D%A2%E4%B8%AD%E7%9A%84%E6%9D%83%E9%99%90%E4%BF%A1%E6%81%AF"},{default:o(()=>[n("页面中的权限信息")]),_:1}),n(" 配置调整；")]),s("li",null,[n("删除：拥有页面删除权限才会显示，可以通过 "),a(e,{to:"/use/abutment.html#%E9%A1%B5%E9%9D%A2%E4%B8%AD%E7%9A%84%E6%9D%83%E9%99%90%E4%BF%A1%E6%81%AF"},{default:o(()=>[n("页面中的权限信息")]),_:1}),n(" 配置调整。")])])])]),F,C,j,s("p",null,[n("例如 "),s("a",R,[n("测试新增"),a(t)]),n(" 页面就是 "),s("a",z,[n("测试增删改查"),a(t)]),n(" 页面独立出的数据录入。")])])}const I=p(g,[["render",N],["__file","crud.html.vue"]]);export{I as default};
