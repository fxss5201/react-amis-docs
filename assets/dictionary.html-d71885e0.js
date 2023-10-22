import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{r as p,o as i,c as l,a as s,b as n,d as o,e as a}from"./app-e6e2cbb0.js";const c="/assets/20231015154619-4b0bbac2.png",u="/assets/20231015154839-376a0b7c.png",r={},d=a('<p>在项目中全局使用的一些字典值的时候，我们可以使用 数据字典，在菜单 <strong>系统设置</strong> / <strong>数据字典</strong>。</p><h2 id="数据字典" tabindex="-1"><a class="header-anchor" href="#数据字典" aria-hidden="true">#</a> 数据字典</h2><figure><img src="'+c+'" alt="数据字典" tabindex="0" loading="lazy"><figcaption>数据字典</figcaption></figure><p>我们可以在 <strong>数据字典</strong> 内新增、编辑、搜索、删除 字典值，支持 字典标识 和 字典名称 两种搜索方式。</p><figure><img src="'+u+'" alt="新增字典数据" tabindex="0" loading="lazy"><figcaption>新增字典数据</figcaption></figure><p>新增字典数据的时候，需要填入字典标识、字典名称、字典值，字典标识请设置 <strong>英文驼峰</strong>，字典名称主要是中文名称，<strong>字典值对应 json 数据结构</strong>。</p>',6),k={href:"https://aisuda.bce.baidu.com/amis/zh-CN/components/form/options",target:"_blank",rel:"noopener noreferrer"},v=s("code",null,"labelField",-1),m=s("code",null,"label",-1),q=s("code",null,"valueField",-1),b=s("code",null,"value",-1),g=a(`<div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">[</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),_=s("code",null,"labelField",-1),h=s("code",null,"valueField",-1),y={href:"https://aisuda.bce.baidu.com/amis/zh-CN/components/form/options#%E9%80%89%E9%A1%B9%E6%A0%87%E7%AD%BE%E5%AD%97%E6%AE%B5-labelfield",target:"_blank",rel:"noopener noreferrer"},f=a(`<div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在界面内我们可以点击操作栏内的 <strong>id获取</strong> / <strong>key获取</strong> ，然后在控制台 Network 内查看 ，这是字典数据提供的两种获取数据的模式，两种获取方式都是 <code>get</code> 请求，可以在表格内复制对应的链接。</p><p><strong>建议数据字典使用的时候，以新增为主，尽可能不要删除，防止系统其他地方显示错误。</strong></p><p><strong>字典数据会被用于某些对外的页面，所以数据内不要包含机密信息。</strong></p>`,4);function x(E,j){const t=p("ExternalLinkIcon");return i(),l("div",null,[d,s("p",null,[n("数据字典一般用于"),s("a",k,[n("下拉框"),o(t)]),n("，为了方便使用，其"),v,n("选项显示字段为"),m,n("，"),q,n("选项值字段为"),b,n("，所以以如下结构是最方便使用的：")]),g,s("p",null,[n("则这个时候需要配置 "),_,n(" 和 "),h,n(" 字段，例如 "),s("a",y,[n("选项标签字段 labelField"),o(t)]),n("，")]),f])}const N=e(r,[["render",x],["__file","dictionary.html.vue"]]);export{N as default};
