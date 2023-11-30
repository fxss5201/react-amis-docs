import{_ as o}from"./plugin-vue_export-helper-c27b6911.js";import{r as p,o as c,c as i,a as s,b as n,d as e,e as a}from"./app-10e67133.js";const l={},r=a('<p>此处列出在界面配置时可以直接使用的API接口。</p><h2 id="用户" tabindex="-1"><a class="header-anchor" href="#用户" aria-hidden="true">#</a> 用户</h2><h3 id="全部用户接口-codeapi-usersalllist" tabindex="-1"><a class="header-anchor" href="#全部用户接口-codeapi-usersalllist" aria-hidden="true">#</a> 全部用户接口 <code>/codeApi/usersAllList</code></h3><h4 id="使用场景" tabindex="-1"><a class="header-anchor" href="#使用场景" aria-hidden="true">#</a> 使用场景</h4>',4),u={href:"https://jimu.fxss.work/#/admin/page/tableDemoPage",target:"_blank",rel:"noopener noreferrer"},d=a(`<h4 id="返回值" tabindex="-1"><a class="header-anchor" href="#返回值" aria-hidden="true">#</a> 返回值</h4><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token string">&quot;用户id&quot;</span><span class="token punctuation">,</span> <span class="token comment">// Number</span>
      <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;用户昵称&quot;</span><span class="token punctuation">,</span> <span class="token comment">// String</span>
      <span class="token property">&quot;email&quot;</span><span class="token operator">:</span> <span class="token string">&quot;用户邮箱&quot;</span><span class="token punctuation">,</span> <span class="token comment">// String</span>
      <span class="token property">&quot;phone&quot;</span><span class="token operator">:</span> <span class="token string">&quot;用户手机号&quot;</span><span class="token punctuation">,</span> <span class="token comment">// String</span>
      <span class="token property">&quot;label&quot;</span><span class="token operator">:</span> <span class="token string">&quot;用户昵称&quot;</span> <span class="token comment">// String</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;msg&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 如有错误信息</span>
  <span class="token property">&quot;status&quot;</span><span class="token operator">:</span> <span class="token number">0</span> <span class="token comment">// status 为 0 标识接口正常</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="使用方式" tabindex="-1"><a class="header-anchor" href="#使用方式" aria-hidden="true">#</a> 使用方式</h4>`,3),k={href:"https://aisuda.bce.baidu.com/amis/zh-CN/components/service",target:"_blank",rel:"noopener noreferrer"},v=a(`<div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;service&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;api&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;method&quot;</span><span class="token operator">:</span> <span class="token string">&quot;post&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;url&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/codeApi/usersAllList&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;messages&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;responseData&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;usersList&quot;</span><span class="token operator">:</span> <span class="token string">&quot;$$&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;body&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;crud&quot;</span><span class="token punctuation">,</span>
      ......
      <span class="token property">&quot;columns&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;mapping&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;label&quot;</span><span class="token operator">:</span> <span class="token string">&quot;创建者&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;creatorId&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;source&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\${usersList.items}&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;u:1aa30eda2507&quot;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function m(q,b){const t=p("ExternalLinkIcon");return c(),i("div",null,[r,s("p",null,[n("主要应用于在列表页面 创建者、更新者 等的回显，如 "),s("a",u,[n("增删改查"),e(t)]),n(" 。")]),d,s("p",null,[n("在最外层加一层 "),s("a",k,[n("service"),e(t)]),n(" 组件可减少在表格中多次请求")]),v])}const y=o(l,[["render",m],["__file","api.html.vue"]]);export{y as default};
