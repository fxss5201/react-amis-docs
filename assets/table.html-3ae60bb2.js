import{_ as p}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as e,c as u,a as s,b as n,d as l,e as a}from"./app-2072bd3c.js";const c={},i=a('<p>这里我们以增删改查作为示例，演示下从页面创建到各个功能齐全。创建页面的时候，建议接口先写好，当然也可以一边联调一边写接口，当前对增删改查提供以下测试接口：</p><h2 id="测试接口" tabindex="-1"><a class="header-anchor" href="#测试接口" aria-hidden="true">#</a> 测试接口</h2><h3 id="contactslist-列表接口" tabindex="-1"><a class="header-anchor" href="#contactslist-列表接口" aria-hidden="true">#</a> <code>/contactsList</code> 列表接口</h3><p>可选参数 <code>name, phone, page, perPage</code> ，返回数据 <code>{ data: { rows: [], count: 1 }, status: 0 }</code> 。</p><h3 id="contactslist-add-新增接口" tabindex="-1"><a class="header-anchor" href="#contactslist-add-新增接口" aria-hidden="true">#</a> <code>/contactsList/add</code> 新增接口</h3><p>必填参数 <code>name, phone, address, cityInfo</code>, 返回数据 <code>{ msg: &#39;新增成功&#39;, status: 0 }</code> 。</p><h3 id="contactslist-update-更新接口" tabindex="-1"><a class="header-anchor" href="#contactslist-update-更新接口" aria-hidden="true">#</a> <code>/contactsList/update</code> 更新接口</h3><p>必填参数 <code>id, name, phone, address, newCityInfo</code>, 返回数据 <code>{ msg: &#39;更新成功&#39;, status: 0 }</code> 。</p><h3 id="contactslist-delete-删除接口" tabindex="-1"><a class="header-anchor" href="#contactslist-delete-删除接口" aria-hidden="true">#</a> <code>/contactsList/delete</code> 删除接口</h3><p>必填参数 <code>id</code>, 返回数据 <code>{ msg: &#39;删除成功&#39;, status: 0 }</code> 。</p><h2 id="页面创建" tabindex="-1"><a class="header-anchor" href="#页面创建" aria-hidden="true">#</a> 页面创建</h2>',11),r=s("strong",null,"菜单编辑",-1),k=a(`<figure><img src="https://img.fxss.work/react-amis-docs-img/sideMenuRightAdd.png" alt="+ 菜单" tabindex="0" loading="lazy"><figcaption>+ 菜单</figcaption></figure><p>菜单配置如下：</p><figure><img src="https://img.fxss.work/react-amis-docs-img/addDemoFolder.png" alt="菜单配置" tabindex="0" loading="lazy"><figcaption>菜单配置</figcaption></figure><p>然后在 演示示例 菜单下新增增删改查页面：</p><figure><img src="https://img.fxss.work/react-amis-docs-img/sideAddTablePage.png" alt="增加增删改查页面" tabindex="0" loading="lazy"><figcaption>增加增删改查页面</figcaption></figure><p>增删改查页面配置如下：</p><figure><img src="https://img.fxss.work/react-amis-docs-img/addTablePage.png" alt="增删改查页面配置" tabindex="0" loading="lazy"><figcaption>增删改查页面配置</figcaption></figure><h2 id="编辑页面内容" tabindex="-1"><a class="header-anchor" href="#编辑页面内容" aria-hidden="true">#</a> 编辑页面内容</h2><figure><img src="https://img.fxss.work/react-amis-docs-img/tableDemo-tableEditorMenu.png" alt="编辑页面" tabindex="0" loading="lazy"><figcaption>编辑页面</figcaption></figure><p>进入页面之后，在组建内选择 增删改查 ：</p><figure><img src="https://img.fxss.work/react-amis-docs-img/add-crud.png" alt="增删改查组件" tabindex="0" loading="lazy"><figcaption>增删改查组件</figcaption></figure><p>先配置接口：</p><figure><img src="https://img.fxss.work/react-amis-docs-img/tableDemo-apiConfig.png" alt="配置接口" tabindex="0" loading="lazy"><figcaption>配置接口</figcaption></figure><figure><img src="https://img.fxss.work/react-amis-docs-img/tableDemo-apiUrl.png" alt="接口链接" tabindex="0" loading="lazy"><figcaption>接口链接</figcaption></figure><p><strong>注意：如果未在前端项目的 <code>config.js -&gt; axiosBaseURL</code> 接口基础链接中配置 <code>/codeDemo: ...</code> 增需要以 <code>http/https</code> 开头。</strong></p><p>配置好链接之后点击 <strong>格式校验并自动生成列配置</strong> 按钮：</p><figure><img src="https://img.fxss.work/react-amis-docs-img/tableDemo-crudAdd.png" alt="格式校验并自动生成列配置" tabindex="0" loading="lazy"><figcaption>格式校验并自动生成列配置</figcaption></figure><p>会自动根据返回的数据生成列配置（一列就是根据一行数据配置生成），此时可以选择 <strong>启用功能 -&gt; 新增、查询、操作栏编辑、操作栏删除</strong> :</p><ol><li>新增会以弹窗的方式，根据列生成form表单进行配置；</li><li>选择启用 查询 ，可以选择 启用的查询字段 ；</li><li>操作栏编辑会默认生成以弹窗的方式编辑内容；</li><li>操作栏删除可以增加二次确认。</li></ol><figure><img src="https://img.fxss.work/react-amis-docs-img/tableDemo-crudAddSearch.png" alt="启用的查询字段" tabindex="0" loading="lazy"><figcaption>启用的查询字段</figcaption></figure><p>更改列配置，点击确认之后就可以生成如下的页面：</p><figure><img src="https://img.fxss.work/react-amis-docs-img/tableDemo-crudTable.png" alt="表格" tabindex="0" loading="lazy"><figcaption>表格</figcaption></figure><p>调整 搜索表单外观，在大纲里选择 表单：</p><figure><img src="https://img.fxss.work/react-amis-docs-img/tableDemo-dagang.png" alt="表单" tabindex="0" loading="lazy"><figcaption>表单</figcaption></figure><figure><img src="https://img.fxss.work/react-amis-docs-img/tableDemo-searchFormTitle.png" alt="修改搜索名称" tabindex="0" loading="lazy"><figcaption>修改搜索名称</figcaption></figure><figure><img src="https://img.fxss.work/react-amis-docs-img/tableDemo-searchFormLayout.png" alt="修改搜索样式" tabindex="0" loading="lazy"><figcaption>修改搜索样式</figcaption></figure><p>代码如下：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;查询条件&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;mode&quot;</span><span class="token operator">:</span> <span class="token string">&quot;inline&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;body&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;input-text&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;label&quot;</span><span class="token operator">:</span> <span class="token string">&quot;姓名&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;name&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;u:6ee0718d2a02&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;size&quot;</span><span class="token operator">:</span> <span class="token string">&quot;md&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;input-text&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;label&quot;</span><span class="token operator">:</span> <span class="token string">&quot;手机号&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;phone&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;u:66ae96d9d539&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;size&quot;</span><span class="token operator">:</span> <span class="token string">&quot;md&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;u:9d8669d8f703&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;actions&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;reset&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;label&quot;</span><span class="token operator">:</span> <span class="token string">&quot;重置&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;u:049fba79f297&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;submit&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;label&quot;</span><span class="token operator">:</span> <span class="token string">&quot;搜索&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;u:c24e49ef0ae2&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;level&quot;</span><span class="token operator">:</span> <span class="token string">&quot;primary&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="新增弹窗内容配置" tabindex="-1"><a class="header-anchor" href="#新增弹窗内容配置" aria-hidden="true">#</a> 新增弹窗内容配置</h3><figure><img src="https://img.fxss.work/react-amis-docs-img/tableDemo-addDialogConfig.png" alt="新增弹窗内容配置" tabindex="0" loading="lazy"><figcaption>新增弹窗内容配置</figcaption></figure><figure><img src="https://img.fxss.work/react-amis-docs-img/tableDemo-addDialogConfigDefault.png" alt="弹窗内容自动生成的配置" tabindex="0" loading="lazy"><figcaption>弹窗内容自动生成的配置</figcaption></figure><p>我们调整弹窗内容如下：</p><figure><img src="https://img.fxss.work/react-amis-docs-img/tableDemo-addDialogConfigNew1.png" alt="弹窗内容" tabindex="0" loading="lazy"><figcaption>弹窗内容</figcaption></figure><p>代码如下：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;dialog&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;新增&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;body&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;form&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;api&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;method&quot;</span><span class="token operator">:</span> <span class="token string">&quot;post&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;url&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/codeDemo/contactsList/add&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;messages&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">&quot;body&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;input-text&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;name&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;label&quot;</span><span class="token operator">:</span> <span class="token string">&quot;名称&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;u:3be2aaff573c&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;placeholder&quot;</span><span class="token operator">:</span> <span class="token string">&quot;请输入名称&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;required&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
          <span class="token property">&quot;clearable&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;input-text&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;phone&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;label&quot;</span><span class="token operator">:</span> <span class="token string">&quot;手机号&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;u:7382b1794385&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;clearable&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
          <span class="token property">&quot;placeholder&quot;</span><span class="token operator">:</span> <span class="token string">&quot;请输入手机号&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;required&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
          <span class="token property">&quot;validations&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;isPhoneNumber&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;input-city&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;cityInfo&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;label&quot;</span><span class="token operator">:</span> <span class="token string">&quot;选择城市&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;u:1f3a3a0c0af6&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;searchable&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
          <span class="token property">&quot;required&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
          <span class="token property">&quot;allowCity&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
          <span class="token property">&quot;extractValue&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;input-text&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;address&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;label&quot;</span><span class="token operator">:</span> <span class="token string">&quot;地址&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;u:8e07e9cb1a86&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;placeholder&quot;</span><span class="token operator">:</span> <span class="token string">&quot;请输入详细地址&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;clearable&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
          <span class="token property">&quot;required&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;textarea&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;remark&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;label&quot;</span><span class="token operator">:</span> <span class="token string">&quot;备注&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;u:190772c3d06a&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;minRows&quot;</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
          <span class="token property">&quot;maxRows&quot;</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>
          <span class="token property">&quot;placeholder&quot;</span><span class="token operator">:</span> <span class="token string">&quot;请输入备注信息&quot;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;u:0deafa809457&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;u:2e94f9d7e9a8&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;showCloseButton&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">&quot;closeOnEsc&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token property">&quot;showErrorMsg&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">&quot;showLoading&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">&quot;size&quot;</span><span class="token operator">:</span> <span class="token string">&quot;md&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>注意：修改完弹窗内容要记得点击确认，否则不会更新代码。</strong></p><h3 id="编辑弹窗内容" tabindex="-1"><a class="header-anchor" href="#编辑弹窗内容" aria-hidden="true">#</a> 编辑弹窗内容</h3><figure><img src="https://img.fxss.work/react-amis-docs-img/tableDemo-addDialogConfigEditor.png" alt="编辑弹窗内容" tabindex="0" loading="lazy"><figcaption>编辑弹窗内容</figcaption></figure><p>代码如下：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;dialog&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;编辑&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;body&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;form&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;api&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;method&quot;</span><span class="token operator">:</span> <span class="token string">&quot;post&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;url&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/codeDemo/contactsList/update&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;messages&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;&amp;&quot;</span><span class="token operator">:</span> <span class="token string">&quot;$$&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\${id}&quot;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">&quot;body&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;label&quot;</span><span class="token operator">:</span> <span class="token string">&quot;名称&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;name&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;input-text&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;placeholder&quot;</span><span class="token operator">:</span> <span class="token string">&quot;请输入名称&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;required&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
          <span class="token property">&quot;clearable&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
          <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;u:60913603ba5b&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;label&quot;</span><span class="token operator">:</span> <span class="token string">&quot;手机号&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;phone&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;input-text&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;clearable&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
          <span class="token property">&quot;placeholder&quot;</span><span class="token operator">:</span> <span class="token string">&quot;请输入手机号&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;required&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
          <span class="token property">&quot;validations&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;isPhoneNumber&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;u:98fc0aea34f0&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;label&quot;</span><span class="token operator">:</span> <span class="token string">&quot;选择城市&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;newCityInfo&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;input-city&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;searchable&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
          <span class="token property">&quot;required&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
          <span class="token property">&quot;allowCity&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
          <span class="token property">&quot;extractValue&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
          <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;u:163f5d170601&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\${cityInfo.districtCode}&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;label&quot;</span><span class="token operator">:</span> <span class="token string">&quot;地址&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;address&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;input-text&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;placeholder&quot;</span><span class="token operator">:</span> <span class="token string">&quot;请输入详细地址&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;clearable&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
          <span class="token property">&quot;required&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
          <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;u:fff0f416d165&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;label&quot;</span><span class="token operator">:</span> <span class="token string">&quot;备注&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;remark&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;textarea&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;minRows&quot;</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
          <span class="token property">&quot;maxRows&quot;</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>
          <span class="token property">&quot;placeholder&quot;</span><span class="token operator">:</span> <span class="token string">&quot;请输入备注信息&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;u:14a394b62a09&quot;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;u:5c5a1a1bf0c4&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;u:92d55f353a9a&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;showCloseButton&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">&quot;closeOnEsc&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token property">&quot;showErrorMsg&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">&quot;showLoading&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">&quot;size&quot;</span><span class="token operator">:</span> <span class="token string">&quot;md&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="删除按钮" tabindex="-1"><a class="header-anchor" href="#删除按钮" aria-hidden="true">#</a> 删除按钮</h3><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;button&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;label&quot;</span><span class="token operator">:</span> <span class="token string">&quot;删除&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;actionType&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ajax&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;level&quot;</span><span class="token operator">:</span> <span class="token string">&quot;link&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;className&quot;</span><span class="token operator">:</span> <span class="token string">&quot;text-danger&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;confirmText&quot;</span><span class="token operator">:</span> <span class="token string">&quot;确定要删除？&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;api&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;method&quot;</span><span class="token operator">:</span> <span class="token string">&quot;post&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;url&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/codeDemo/contactsList/delete&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\${id}&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;messages&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;u:a551bb1dc0bd&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>到此一个完整的增删改查就完成了。</p><h2 id="完整代码" tabindex="-1"><a class="header-anchor" href="#完整代码" aria-hidden="true">#</a> 完整代码</h2><details class="hint-container details"><summary>完整代码如下</summary><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;page&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;增删改查&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;body&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
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
      <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;u:d553fdf824a0&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;body&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;crud&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;u:9b82c2a2dae3&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;syncLocation&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
          <span class="token property">&quot;api&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;method&quot;</span><span class="token operator">:</span> <span class="token string">&quot;post&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;url&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/codeDemo/contactsList&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;messages&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token property">&quot;columns&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
              <span class="token property">&quot;label&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ID&quot;</span><span class="token punctuation">,</span>
              <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;text&quot;</span><span class="token punctuation">,</span>
              <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;id&quot;</span><span class="token punctuation">,</span>
              <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;u:4482295c18f2&quot;</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
              <span class="token property">&quot;label&quot;</span><span class="token operator">:</span> <span class="token string">&quot;姓名&quot;</span><span class="token punctuation">,</span>
              <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;text&quot;</span><span class="token punctuation">,</span>
              <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;name&quot;</span><span class="token punctuation">,</span>
              <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;u:a0b3ae5acc59&quot;</span><span class="token punctuation">,</span>
              <span class="token property">&quot;placeholder&quot;</span><span class="token operator">:</span> <span class="token string">&quot;-&quot;</span><span class="token punctuation">,</span>
              <span class="token property">&quot;copyable&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
              <span class="token property">&quot;label&quot;</span><span class="token operator">:</span> <span class="token string">&quot;手机号&quot;</span><span class="token punctuation">,</span>
              <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;text&quot;</span><span class="token punctuation">,</span>
              <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;phone&quot;</span><span class="token punctuation">,</span>
              <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;u:74dfeafc538d&quot;</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
              <span class="token property">&quot;label&quot;</span><span class="token operator">:</span> <span class="token string">&quot;省份&quot;</span><span class="token punctuation">,</span>
              <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;text&quot;</span><span class="token punctuation">,</span>
              <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;province&quot;</span><span class="token punctuation">,</span>
              <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;u:cad82b2a55ff&quot;</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
              <span class="token property">&quot;label&quot;</span><span class="token operator">:</span> <span class="token string">&quot;省份code&quot;</span><span class="token punctuation">,</span>
              <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;text&quot;</span><span class="token punctuation">,</span>
              <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;provinceCode&quot;</span><span class="token punctuation">,</span>
              <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;u:b4a52c8810f5&quot;</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
              <span class="token property">&quot;label&quot;</span><span class="token operator">:</span> <span class="token string">&quot;城市&quot;</span><span class="token punctuation">,</span>
              <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;text&quot;</span><span class="token punctuation">,</span>
              <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;city&quot;</span><span class="token punctuation">,</span>
              <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;u:f042b81eca79&quot;</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
              <span class="token property">&quot;label&quot;</span><span class="token operator">:</span> <span class="token string">&quot;城市code&quot;</span><span class="token punctuation">,</span>
              <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;text&quot;</span><span class="token punctuation">,</span>
              <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;cityCode&quot;</span><span class="token punctuation">,</span>
              <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;u:e8bd8da0dd68&quot;</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
              <span class="token property">&quot;label&quot;</span><span class="token operator">:</span> <span class="token string">&quot;区域&quot;</span><span class="token punctuation">,</span>
              <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;text&quot;</span><span class="token punctuation">,</span>
              <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;district&quot;</span><span class="token punctuation">,</span>
              <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;u:71e061c2fc41&quot;</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
              <span class="token property">&quot;label&quot;</span><span class="token operator">:</span> <span class="token string">&quot;区域code&quot;</span><span class="token punctuation">,</span>
              <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;text&quot;</span><span class="token punctuation">,</span>
              <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;districtCode&quot;</span><span class="token punctuation">,</span>
              <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;u:1b2e481a10d5&quot;</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
              <span class="token property">&quot;label&quot;</span><span class="token operator">:</span> <span class="token string">&quot;地址&quot;</span><span class="token punctuation">,</span>
              <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;text&quot;</span><span class="token punctuation">,</span>
              <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;address&quot;</span><span class="token punctuation">,</span>
              <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;u:02c6b2d8b8e8&quot;</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
              <span class="token property">&quot;label&quot;</span><span class="token operator">:</span> <span class="token string">&quot;备注&quot;</span><span class="token punctuation">,</span>
              <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;text&quot;</span><span class="token punctuation">,</span>
              <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;remark&quot;</span><span class="token punctuation">,</span>
              <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;u:ae1c17a9f317&quot;</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
              <span class="token property">&quot;label&quot;</span><span class="token operator">:</span> <span class="token string">&quot;创建者&quot;</span><span class="token punctuation">,</span>
              <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;mapping&quot;</span><span class="token punctuation">,</span>
              <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;creatorId&quot;</span><span class="token punctuation">,</span>
              <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;u:ff5b03e95527&quot;</span><span class="token punctuation">,</span>
              <span class="token property">&quot;source&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\${usersList.items}&quot;</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
              <span class="token property">&quot;label&quot;</span><span class="token operator">:</span> <span class="token string">&quot;创建时间&quot;</span><span class="token punctuation">,</span>
              <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;text&quot;</span><span class="token punctuation">,</span>
              <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;createTime&quot;</span><span class="token punctuation">,</span>
              <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;u:b09036c3085a&quot;</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
              <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;mapping&quot;</span><span class="token punctuation">,</span>
              <span class="token property">&quot;label&quot;</span><span class="token operator">:</span> <span class="token string">&quot;更新者&quot;</span><span class="token punctuation">,</span>
              <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;u:ff5b03e95527&quot;</span><span class="token punctuation">,</span>
              <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;updaterId&quot;</span><span class="token punctuation">,</span>
              <span class="token property">&quot;source&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\${usersList.items}&quot;</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
              <span class="token property">&quot;label&quot;</span><span class="token operator">:</span> <span class="token string">&quot;更新时间&quot;</span><span class="token punctuation">,</span>
              <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;text&quot;</span><span class="token punctuation">,</span>
              <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;updateTime&quot;</span><span class="token punctuation">,</span>
              <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;u:b09036c3085a&quot;</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
              <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;operation&quot;</span><span class="token punctuation">,</span>
              <span class="token property">&quot;label&quot;</span><span class="token operator">:</span> <span class="token string">&quot;操作&quot;</span><span class="token punctuation">,</span>
              <span class="token property">&quot;buttons&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token punctuation">{</span>
                  <span class="token property">&quot;label&quot;</span><span class="token operator">:</span> <span class="token string">&quot;编辑&quot;</span><span class="token punctuation">,</span>
                  <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;button&quot;</span><span class="token punctuation">,</span>
                  <span class="token property">&quot;actionType&quot;</span><span class="token operator">:</span> <span class="token string">&quot;dialog&quot;</span><span class="token punctuation">,</span>
                  <span class="token property">&quot;level&quot;</span><span class="token operator">:</span> <span class="token string">&quot;link&quot;</span><span class="token punctuation">,</span>
                  <span class="token property">&quot;dialog&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;dialog&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;编辑&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;body&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                      <span class="token punctuation">{</span>
                        <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;form&quot;</span><span class="token punctuation">,</span>
                        <span class="token property">&quot;api&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                          <span class="token property">&quot;method&quot;</span><span class="token operator">:</span> <span class="token string">&quot;post&quot;</span><span class="token punctuation">,</span>
                          <span class="token property">&quot;url&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/codeDemo/contactsList/update&quot;</span><span class="token punctuation">,</span>
                          <span class="token property">&quot;messages&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                          <span class="token punctuation">}</span><span class="token punctuation">,</span>
                          <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                            <span class="token property">&quot;&amp;&quot;</span><span class="token operator">:</span> <span class="token string">&quot;$$&quot;</span><span class="token punctuation">,</span>
                            <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\${id}&quot;</span>
                          <span class="token punctuation">}</span>
                        <span class="token punctuation">}</span><span class="token punctuation">,</span>
                        <span class="token property">&quot;body&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                          <span class="token punctuation">{</span>
                            <span class="token property">&quot;label&quot;</span><span class="token operator">:</span> <span class="token string">&quot;名称&quot;</span><span class="token punctuation">,</span>
                            <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;name&quot;</span><span class="token punctuation">,</span>
                            <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;input-text&quot;</span><span class="token punctuation">,</span>
                            <span class="token property">&quot;placeholder&quot;</span><span class="token operator">:</span> <span class="token string">&quot;请输入名称&quot;</span><span class="token punctuation">,</span>
                            <span class="token property">&quot;required&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                            <span class="token property">&quot;clearable&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                            <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;u:60913603ba5b&quot;</span>
                          <span class="token punctuation">}</span><span class="token punctuation">,</span>
                          <span class="token punctuation">{</span>
                            <span class="token property">&quot;label&quot;</span><span class="token operator">:</span> <span class="token string">&quot;手机号&quot;</span><span class="token punctuation">,</span>
                            <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;phone&quot;</span><span class="token punctuation">,</span>
                            <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;input-text&quot;</span><span class="token punctuation">,</span>
                            <span class="token property">&quot;clearable&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                            <span class="token property">&quot;placeholder&quot;</span><span class="token operator">:</span> <span class="token string">&quot;请输入手机号&quot;</span><span class="token punctuation">,</span>
                            <span class="token property">&quot;required&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                            <span class="token property">&quot;validations&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                              <span class="token property">&quot;isPhoneNumber&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
                            <span class="token punctuation">}</span><span class="token punctuation">,</span>
                            <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;u:98fc0aea34f0&quot;</span>
                          <span class="token punctuation">}</span><span class="token punctuation">,</span>
                          <span class="token punctuation">{</span>
                            <span class="token property">&quot;label&quot;</span><span class="token operator">:</span> <span class="token string">&quot;选择城市&quot;</span><span class="token punctuation">,</span>
                            <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;newCityInfo&quot;</span><span class="token punctuation">,</span>
                            <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;input-city&quot;</span><span class="token punctuation">,</span>
                            <span class="token property">&quot;searchable&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                            <span class="token property">&quot;required&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                            <span class="token property">&quot;allowCity&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                            <span class="token property">&quot;extractValue&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
                            <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;u:163f5d170601&quot;</span><span class="token punctuation">,</span>
                            <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\${cityInfo.districtCode}&quot;</span>
                          <span class="token punctuation">}</span><span class="token punctuation">,</span>
                          <span class="token punctuation">{</span>
                            <span class="token property">&quot;label&quot;</span><span class="token operator">:</span> <span class="token string">&quot;地址&quot;</span><span class="token punctuation">,</span>
                            <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;address&quot;</span><span class="token punctuation">,</span>
                            <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;input-text&quot;</span><span class="token punctuation">,</span>
                            <span class="token property">&quot;placeholder&quot;</span><span class="token operator">:</span> <span class="token string">&quot;请输入详细地址&quot;</span><span class="token punctuation">,</span>
                            <span class="token property">&quot;clearable&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                            <span class="token property">&quot;required&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                            <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;u:fff0f416d165&quot;</span>
                          <span class="token punctuation">}</span><span class="token punctuation">,</span>
                          <span class="token punctuation">{</span>
                            <span class="token property">&quot;label&quot;</span><span class="token operator">:</span> <span class="token string">&quot;备注&quot;</span><span class="token punctuation">,</span>
                            <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;remark&quot;</span><span class="token punctuation">,</span>
                            <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;textarea&quot;</span><span class="token punctuation">,</span>
                            <span class="token property">&quot;minRows&quot;</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
                            <span class="token property">&quot;maxRows&quot;</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>
                            <span class="token property">&quot;placeholder&quot;</span><span class="token operator">:</span> <span class="token string">&quot;请输入备注信息&quot;</span><span class="token punctuation">,</span>
                            <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;u:14a394b62a09&quot;</span>
                          <span class="token punctuation">}</span>
                        <span class="token punctuation">]</span><span class="token punctuation">,</span>
                        <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;u:5c5a1a1bf0c4&quot;</span>
                      <span class="token punctuation">}</span>
                    <span class="token punctuation">]</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;u:92d55f353a9a&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;showCloseButton&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;closeOnEsc&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;showErrorMsg&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;showLoading&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;size&quot;</span><span class="token operator">:</span> <span class="token string">&quot;md&quot;</span>
                  <span class="token punctuation">}</span><span class="token punctuation">,</span>
                  <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;u:a8bdcd1bd446&quot;</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                  <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;button&quot;</span><span class="token punctuation">,</span>
                  <span class="token property">&quot;label&quot;</span><span class="token operator">:</span> <span class="token string">&quot;删除&quot;</span><span class="token punctuation">,</span>
                  <span class="token property">&quot;actionType&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ajax&quot;</span><span class="token punctuation">,</span>
                  <span class="token property">&quot;level&quot;</span><span class="token operator">:</span> <span class="token string">&quot;link&quot;</span><span class="token punctuation">,</span>
                  <span class="token property">&quot;className&quot;</span><span class="token operator">:</span> <span class="token string">&quot;text-danger&quot;</span><span class="token punctuation">,</span>
                  <span class="token property">&quot;confirmText&quot;</span><span class="token operator">:</span> <span class="token string">&quot;确定要删除？&quot;</span><span class="token punctuation">,</span>
                  <span class="token property">&quot;api&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token property">&quot;method&quot;</span><span class="token operator">:</span> <span class="token string">&quot;post&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;url&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/codeDemo/contactsList/delete&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                      <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\${id}&quot;</span>
                    <span class="token punctuation">}</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;messages&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token punctuation">}</span>
                  <span class="token punctuation">}</span><span class="token punctuation">,</span>
                  <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;u:a551bb1dc0bd&quot;</span>
                <span class="token punctuation">}</span>
              <span class="token punctuation">]</span><span class="token punctuation">,</span>
              <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;u:14f45b2881bb&quot;</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">]</span><span class="token punctuation">,</span>
          <span class="token property">&quot;bulkActions&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">]</span><span class="token punctuation">,</span>
          <span class="token property">&quot;itemActions&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">]</span><span class="token punctuation">,</span>
          <span class="token property">&quot;filterSettingSource&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token string">&quot;id&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;name&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;phone&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;province&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;provinceCode&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;city&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;cityCode&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;district&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;districtCode&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;addres&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;remark&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;creatorId&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;createTime&quot;</span>
          <span class="token punctuation">]</span><span class="token punctuation">,</span>
          <span class="token property">&quot;features&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token string">&quot;create&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;filter&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;update&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;delete&quot;</span>
          <span class="token punctuation">]</span><span class="token punctuation">,</span>
          <span class="token property">&quot;filterColumnCount&quot;</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
          <span class="token property">&quot;filterEnabledList&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
              <span class="token property">&quot;label&quot;</span><span class="token operator">:</span> <span class="token string">&quot;name&quot;</span><span class="token punctuation">,</span>
              <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token string">&quot;name&quot;</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
              <span class="token property">&quot;label&quot;</span><span class="token operator">:</span> <span class="token string">&quot;phone&quot;</span><span class="token punctuation">,</span>
              <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token string">&quot;phone&quot;</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">]</span><span class="token punctuation">,</span>
          <span class="token property">&quot;headerToolbar&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
              <span class="token property">&quot;label&quot;</span><span class="token operator">:</span> <span class="token string">&quot;新增&quot;</span><span class="token punctuation">,</span>
              <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;button&quot;</span><span class="token punctuation">,</span>
              <span class="token property">&quot;actionType&quot;</span><span class="token operator">:</span> <span class="token string">&quot;dialog&quot;</span><span class="token punctuation">,</span>
              <span class="token property">&quot;level&quot;</span><span class="token operator">:</span> <span class="token string">&quot;primary&quot;</span><span class="token punctuation">,</span>
              <span class="token property">&quot;dialog&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;dialog&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;新增&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;body&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                  <span class="token punctuation">{</span>
                    <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;form&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;api&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                      <span class="token property">&quot;method&quot;</span><span class="token operator">:</span> <span class="token string">&quot;post&quot;</span><span class="token punctuation">,</span>
                      <span class="token property">&quot;url&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/codeDemo/contactsList/add&quot;</span><span class="token punctuation">,</span>
                      <span class="token property">&quot;messages&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                      <span class="token punctuation">}</span>
                    <span class="token punctuation">}</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;body&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                      <span class="token punctuation">{</span>
                        <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;input-text&quot;</span><span class="token punctuation">,</span>
                        <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;name&quot;</span><span class="token punctuation">,</span>
                        <span class="token property">&quot;label&quot;</span><span class="token operator">:</span> <span class="token string">&quot;名称&quot;</span><span class="token punctuation">,</span>
                        <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;u:3be2aaff573c&quot;</span><span class="token punctuation">,</span>
                        <span class="token property">&quot;placeholder&quot;</span><span class="token operator">:</span> <span class="token string">&quot;请输入名称&quot;</span><span class="token punctuation">,</span>
                        <span class="token property">&quot;required&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                        <span class="token property">&quot;clearable&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
                      <span class="token punctuation">}</span><span class="token punctuation">,</span>
                      <span class="token punctuation">{</span>
                        <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;input-text&quot;</span><span class="token punctuation">,</span>
                        <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;phone&quot;</span><span class="token punctuation">,</span>
                        <span class="token property">&quot;label&quot;</span><span class="token operator">:</span> <span class="token string">&quot;手机号&quot;</span><span class="token punctuation">,</span>
                        <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;u:7382b1794385&quot;</span><span class="token punctuation">,</span>
                        <span class="token property">&quot;clearable&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                        <span class="token property">&quot;placeholder&quot;</span><span class="token operator">:</span> <span class="token string">&quot;请输入手机号&quot;</span><span class="token punctuation">,</span>
                        <span class="token property">&quot;required&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                        <span class="token property">&quot;validations&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                          <span class="token property">&quot;isPhoneNumber&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
                        <span class="token punctuation">}</span>
                      <span class="token punctuation">}</span><span class="token punctuation">,</span>
                      <span class="token punctuation">{</span>
                        <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;input-city&quot;</span><span class="token punctuation">,</span>
                        <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;cityInfo&quot;</span><span class="token punctuation">,</span>
                        <span class="token property">&quot;label&quot;</span><span class="token operator">:</span> <span class="token string">&quot;选择城市&quot;</span><span class="token punctuation">,</span>
                        <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;u:1f3a3a0c0af6&quot;</span><span class="token punctuation">,</span>
                        <span class="token property">&quot;searchable&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                        <span class="token property">&quot;required&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                        <span class="token property">&quot;allowCity&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                        <span class="token property">&quot;extractValue&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>
                      <span class="token punctuation">}</span><span class="token punctuation">,</span>
                      <span class="token punctuation">{</span>
                        <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;input-text&quot;</span><span class="token punctuation">,</span>
                        <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;address&quot;</span><span class="token punctuation">,</span>
                        <span class="token property">&quot;label&quot;</span><span class="token operator">:</span> <span class="token string">&quot;地址&quot;</span><span class="token punctuation">,</span>
                        <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;u:8e07e9cb1a86&quot;</span><span class="token punctuation">,</span>
                        <span class="token property">&quot;placeholder&quot;</span><span class="token operator">:</span> <span class="token string">&quot;请输入详细地址&quot;</span><span class="token punctuation">,</span>
                        <span class="token property">&quot;clearable&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                        <span class="token property">&quot;required&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
                      <span class="token punctuation">}</span><span class="token punctuation">,</span>
                      <span class="token punctuation">{</span>
                        <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;textarea&quot;</span><span class="token punctuation">,</span>
                        <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;remark&quot;</span><span class="token punctuation">,</span>
                        <span class="token property">&quot;label&quot;</span><span class="token operator">:</span> <span class="token string">&quot;备注&quot;</span><span class="token punctuation">,</span>
                        <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;u:190772c3d06a&quot;</span><span class="token punctuation">,</span>
                        <span class="token property">&quot;minRows&quot;</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
                        <span class="token property">&quot;maxRows&quot;</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>
                        <span class="token property">&quot;placeholder&quot;</span><span class="token operator">:</span> <span class="token string">&quot;请输入备注信息&quot;</span>
                      <span class="token punctuation">}</span>
                    <span class="token punctuation">]</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;u:0deafa809457&quot;</span>
                  <span class="token punctuation">}</span>
                <span class="token punctuation">]</span><span class="token punctuation">,</span>
                <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;u:2e94f9d7e9a8&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;showCloseButton&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                <span class="token property">&quot;closeOnEsc&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
                <span class="token property">&quot;showErrorMsg&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                <span class="token property">&quot;showLoading&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                <span class="token property">&quot;size&quot;</span><span class="token operator">:</span> <span class="token string">&quot;md&quot;</span>
              <span class="token punctuation">}</span><span class="token punctuation">,</span>
              <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;u:157a6011cfe6&quot;</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token string">&quot;bulkActions&quot;</span>
          <span class="token punctuation">]</span><span class="token punctuation">,</span>
          <span class="token property">&quot;filter&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;查询条件&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;mode&quot;</span><span class="token operator">:</span> <span class="token string">&quot;inline&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;body&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
              <span class="token punctuation">{</span>
                <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;input-text&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;label&quot;</span><span class="token operator">:</span> <span class="token string">&quot;姓名&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;name&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;u:6ee0718d2a02&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;size&quot;</span><span class="token operator">:</span> <span class="token string">&quot;md&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;clearable&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
              <span class="token punctuation">}</span><span class="token punctuation">,</span>
              <span class="token punctuation">{</span>
                <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;input-text&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;label&quot;</span><span class="token operator">:</span> <span class="token string">&quot;手机号&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;phone&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;u:66ae96d9d539&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;size&quot;</span><span class="token operator">:</span> <span class="token string">&quot;md&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;clearable&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
              <span class="token punctuation">}</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;u:9d8669d8f703&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;actions&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
              <span class="token punctuation">{</span>
                <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;reset&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;label&quot;</span><span class="token operator">:</span> <span class="token string">&quot;重置&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;u:049fba79f297&quot;</span>
              <span class="token punctuation">}</span><span class="token punctuation">,</span>
              <span class="token punctuation">{</span>
                <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;submit&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;label&quot;</span><span class="token operator">:</span> <span class="token string">&quot;搜索&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;u:c24e49ef0ae2&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;level&quot;</span><span class="token operator">:</span> <span class="token string">&quot;primary&quot;</span>
              <span class="token punctuation">}</span>
            <span class="token punctuation">]</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;u:b3abad984d9e&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;asideResizor&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token property">&quot;style&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;boxShadow&quot;</span><span class="token operator">:</span> <span class="token string">&quot; 0px 0px 0px 0px transparent&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;pullRefresh&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;disabled&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>`,45);function d(q,v){const t=o("HopeIcon");return e(),u("div",null,[i,s("p",null,[n("首先进入编辑页面，我们点击 "),r,n(" 的右侧 "),l(t,{icon:"plus"}),n(" 按钮:")]),k])}const g=p(c,[["render",d],["__file","table.html.vue"]]);export{g as default};
