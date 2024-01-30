import{_ as i}from"./20240129155238-6a1585af.js";import{_ as l}from"./20240129160637-cc64f73f.js";import{_ as c}from"./20240129162322-dc2c21bd.js";import{_ as r,a as u}from"./20240130205335-7276a3d4.js";import{_ as d}from"./plugin-vue_export-helper-c27b6911.js";import{r as p,o as k,c as v,a as n,b as s,d as a,e}from"./app-2e3d00cd.js";const h="/react-amis-docs/assets/20240130163819-9be04929.png",g="/react-amis-docs/assets/20240130202928-168fd01b.png",m="/react-amis-docs/assets/20240130203937-ba2f55c8.png",b="/react-amis-docs/assets/20240130210625-18813155.png",f={},_=n("h2",{id:"人人都可配置的大屏可视化",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#人人都可配置的大屏可视化","aria-hidden":"true"},"#"),s(" 人人都可配置的大屏可视化")],-1),y=n("p",null,"大屏主要是为了展示数据和酷炫的效果，布局大部分是9宫格，或者在9宫格上做的延伸，现在介绍下 泛积木-低代码 提供的大屏可视化配置。",-1),x={href:"https://jimu.fxss.work/#/outside/echartBigPage2",target:"_blank",rel:"noopener noreferrer"},w=e('<figure><img src="'+i+'" alt="大屏布局组件" tabindex="0" loading="lazy"><figcaption>大屏布局组件</figcaption></figure><p>创建页面之后，点击进入编辑页面，在可视化编辑器左侧组件往下翻，找到自定义组件中的 <strong>大屏布局组件</strong> ，将 大屏布局组件 拖入页面，可以看到下面的成果：</p><figure><img src="'+h+'" alt="大屏布局组件" tabindex="0" loading="lazy"><figcaption>大屏布局组件</figcaption></figure><p>拖入的 大屏布局组件 将使用基础配置，并且已经自带了缩放容器组件。</p><h3 id="缩放容器组件" tabindex="-1"><a class="header-anchor" href="#缩放容器组件" aria-hidden="true">#</a> 缩放容器组件</h3><figure><img src="'+l+'" alt="缩放容器组件" tabindex="0" loading="lazy"><figcaption>缩放容器组件</figcaption></figure><p>缩放容器组件主要用于适配不同的尺寸大小，实现原理：<strong>缩放容器组件是以该组件的宽度和设计稿的宽度求比例，然后等比例缩放</strong>。</p>',7),q={href:"https://aisuda.bce.baidu.com/amis/zh-CN/style/index",target:"_blank",rel:"noopener noreferrer"},C=n("code",null,"className",-1),I=n("code",null,"className",-1),N=e('<h3 id="全屏按钮组件" tabindex="-1"><a class="header-anchor" href="#全屏按钮组件" aria-hidden="true">#</a> 全屏按钮组件</h3><figure><img src="'+c+'" alt="全屏按钮组件" tabindex="0" loading="lazy"><figcaption>全屏按钮组件</figcaption></figure><p>全屏按钮组件主要用于配置全屏按钮加全屏元素等。在全屏元素中配置 缩放容器组件 的 唯一<code>className</code> 。</p><p>全屏按钮组件还支持配置 样式名称、字体颜色、字体大小、间距。字体颜色未配置时，会默认从 大屏布局组件 的字体颜色继承。</p><p>说完上述两个小组件之后，我们再来说说关键的 大屏布局组件。</p><h3 id="大屏布局组件" tabindex="-1"><a class="header-anchor" href="#大屏布局组件" aria-hidden="true">#</a> 大屏布局组件</h3><figure><img src="'+i+`" alt="大屏布局组件" tabindex="0" loading="lazy"><figcaption>大屏布局组件</figcaption></figure><p>大屏布局组件的配置项可以概括为两部分：</p><ol><li>总体配置： <ol><li>总体内容： <ol><li>样式名称；</li><li>字体颜色；</li><li>背景颜色；</li><li>背景图片（不想写链接，也可以直接上传）；</li><li>是否显示头部；</li><li>模块样式模板；</li><li>样式覆盖；</li></ol></li><li>页面内容： <ol><li>样式名称；</li><li>内间距；</li></ol></li></ol></li><li>头部配置： <ol><li>头部总体配置： <ol><li>标题名称；</li><li>头部背景图片（支持上传）；</li><li>样式名称；</li></ol></li><li>头部左侧： <ol><li>左侧内容；</li><li>样式名称；</li></ol></li><li>头部右侧： <ol><li>右侧内容；</li><li>样式名称；</li></ol></li><li>头部时间： <ol><li>是否显示；</li><li>字体大小；</li><li>显示格式。</li></ol></li></ol></li></ol><p><strong>样式覆盖</strong> 填入 css 之后，会自动在组件内创建 <code>style</code> 标签添加样式，这个时候需要使用 css 优先级去覆盖默认展示内容，例如：</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.large-screen-layout .large-screen-layout-header</span> <span class="token punctuation">{</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>此时页面头部的高度将由默认的 80px 调整为 100px 。</p><p><strong>头部背景图片</strong> 未设置时，头部高度默认为 80px ，设置之后，高度为背景图片按照宽度整体缩放之后的高度。</p>`,13),z=n("strong",null,"头部左/右侧内容",-1),S={href:"https://aisuda.bce.baidu.com/amis/zh-CN/docs/types/schemanode",target:"_blank",rel:"noopener noreferrer"},E=e(`<p>例如：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  ...
  <span class="token property">&quot;headerLeft&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;tpl&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;tpl&quot;</span><span class="token operator">:</span> <span class="token string">&quot;公司名称&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;u:3dc2c3411ae1&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;headerRight&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;fan-screenfull-button&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;targetClass&quot;</span><span class="token operator">:</span> <span class="token string">&quot;largeScreenLayout&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;fontSize&quot;</span><span class="token operator">:</span> <span class="token string">&quot;22px&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;u:be46114da702&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  ...
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>模块样式模板</strong> 用于统一设置 大屏单块模板组件 的样式模板，样式模板是事先定义好的一些简单样式。</p><h3 id="大屏单块模板组件" tabindex="-1"><a class="header-anchor" href="#大屏单块模板组件" aria-hidden="true">#</a> 大屏单块模板组件</h3><figure><img src="`+r+'" alt="大屏单块模板组件" tabindex="0" loading="lazy"><figcaption>大屏单块模板组件</figcaption></figure>',5),F={href:"https://aisuda.bce.baidu.com/amis/zh-CN/components/grid-2d",target:"_blank",rel:"noopener noreferrer"},j=n("p",null,[n("img",{src:g,alt:"grid-2d",loading:"lazy"}),n("img",{src:m,alt:"grid-2d",loading:"lazy"})],-1),A=n("strong",null,"grid-2d 组件",-1),B={href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/grid",target:"_blank",rel:"noopener noreferrer"},L=e(`<p>格子垂直高度 = (缩放容器组件的设计稿高度 - 大屏布局组件头部高度 - 大屏布局组件头部高度页面内容内边距 * 2 - (格子行间距 || 格子间距) * 2) / 3</p><p>例如默认的： (1080 - 80 - 20 * 2 - 20 * 2) / 3 = 306.667px</p><p>大屏单块模板组件 支持如下配置：</p><ol><li>总体内容： <ol><li>样式名称；</li><li>样式模板；</li><li>位置配置； <ol><li>起始位置X;</li><li>起始位置Y;</li><li>宽度W;</li><li>高度H;</li></ol></li><li>是否显示头部；</li><li>样式覆盖；</li></ol></li><li>模块标题： <ol><li>标题名称；</li><li>标题样式；</li><li>字体颜色；</li></ol></li><li>模块头部右侧： <ol><li>右侧内容；</li><li>样式名称；</li></ol></li><li>模块内容： <ol><li>样式名称；</li><li>内边距。</li></ol></li></ol><p><strong>样式覆盖</strong> 填入 css 之后，会自动在组件内创建 <code>style</code> 标签添加样式，这个时候需要使用 css 优先级去覆盖默认展示内容，例如：</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.fan-screen-card .fan-screen-card-header</span> <span class="token punctuation">{</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 80px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>此时模块头部的高度将由默认的 50px 调整为 80px 。 css 会作用于符合 css 的所有DOM元素，如果需要唯一设置，请在前面添加特殊的前缀，例如：</p><figure><img src="`+u+`" alt="特殊的前缀" tabindex="0" loading="lazy"><figcaption>特殊的前缀</figcaption></figure><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.fan-screen-card-1.fan-screen-card .fan-screen-card-header</span> <span class="token punctuation">{</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 80px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>样式模板</strong> 可单独设置每个模块的样式。</p>`,10),V=n("strong",null,"模块头部右侧内容",-1),$={href:"https://aisuda.bce.baidu.com/amis/zh-CN/docs/types/schemanode",target:"_blank",rel:"noopener noreferrer"},D=n("p",null,[n("strong",null,"位置配置"),s(" 每项的值都是数值，比如默认的 9 宫格就是 3 * 3，此时设置的值就是 1/2/3 ，宽度1就代表一列，高度1就代表一行。可以调整初始位置、宽度、高度等配置出多种布局方式。")],-1),M=n("strong",null,"大屏单块模板内容",-1),O={href:"https://aisuda.bce.baidu.com/amis/zh-CN/components/service",target:"_blank",rel:"noopener noreferrer"},P={href:"https://aisuda.bce.baidu.com/amis/zh-CN/components/chart",target:"_blank",rel:"noopener noreferrer"},T={href:"https://jimu.fxss.work/#/outside/echartBigPage2",target:"_blank",rel:"noopener noreferrer"},W={href:"https://aisuda.bce.baidu.com/amis/zh-CN/components/chart",target:"_blank",rel:"noopener noreferrer"},H=n("code",null,"className",-1),R=n("li",null,[s("配置 Chart 图表的 "),n("code",null,"config"),s(" ；")],-1),X=n("li",null,[s("配置 Chart 图表的 "),n("code",null,"dataFilter"),s("。")],-1),Y=e(`<p><strong><code>dataFilter</code></strong>：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> curFlag <span class="token operator">=</span> <span class="token string">&#39;lineCharts&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">if</span> <span class="token punctuation">(</span>window<span class="token punctuation">.</span>fanEchartsIntervals <span class="token operator">&amp;&amp;</span> window<span class="token punctuation">.</span>fanEchartsIntervals<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>curFlag<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">clearInterval</span><span class="token punctuation">(</span>window<span class="token punctuation">.</span>fanEchartsIntervals<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>curFlag<span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  window<span class="token punctuation">.</span>fanEchartsIntervals<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>curFlag<span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> window<span class="token punctuation">.</span>fanEchartsIntervals<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>curFlag<span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">dispose</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> myChart <span class="token operator">=</span> echarts<span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span><span class="token function">getElementsByClassName</span><span class="token punctuation">(</span>curFlag<span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> currentIndex <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
myChart<span class="token punctuation">.</span><span class="token function">setOption</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token operator">...</span>config<span class="token punctuation">,</span>
  <span class="token literal-property property">series</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token operator">...</span>config<span class="token punctuation">.</span>series<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token literal-property property">data</span><span class="token operator">:</span> data<span class="token punctuation">.</span>line
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> interval <span class="token operator">=</span> <span class="token function">setInterval</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> dataLen <span class="token operator">=</span> data<span class="token punctuation">.</span>line<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
  <span class="token comment">// 取消之前高亮的图形</span>
  myChart<span class="token punctuation">.</span><span class="token function">dispatchAction</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;downplay&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">seriesIndex</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token literal-property property">dataIndex</span><span class="token operator">:</span> currentIndex
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  currentIndex <span class="token operator">=</span> <span class="token punctuation">(</span>currentIndex <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">%</span> dataLen<span class="token punctuation">;</span>
  <span class="token comment">// 高亮当前图形</span>
  myChart<span class="token punctuation">.</span><span class="token function">dispatchAction</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;highlight&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">seriesIndex</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token literal-property property">dataIndex</span><span class="token operator">:</span> currentIndex
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// 显示 tooltip</span>
  myChart<span class="token punctuation">.</span><span class="token function">dispatchAction</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;showTip&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">seriesIndex</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token literal-property property">dataIndex</span><span class="token operator">:</span> currentIndex
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">if</span> <span class="token punctuation">(</span>window<span class="token punctuation">.</span>fanEchartsIntervals<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  window<span class="token punctuation">.</span>fanEchartsIntervals<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>curFlag<span class="token punctuation">,</span> <span class="token punctuation">[</span>interval<span class="token punctuation">,</span> myChart<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
  window<span class="token punctuation">.</span>fanEchartsIntervals <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  window<span class="token punctuation">.</span>fanEchartsIntervals<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>curFlag<span class="token punctuation">,</span> <span class="token punctuation">[</span>interval<span class="token punctuation">,</span> myChart<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">return</span> config<span class="token punctuation">;</span>
</code></pre><div class="highlight-lines"><div class="highlight-line"> </div><br><br><br><br><br><br><br><br><br><br><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><br><br><br><br><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><br><br><br><br><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>修改高亮行 1 <code>curFlag</code> 设置为对应的 Chart 图表的 <code>className</code>，12-17 行是插入数据，22-39 为对应数据的切换展示方式。</p><figure><img src="`+b+'" alt="增加大屏单块模板" tabindex="0" loading="lazy"><figcaption>增加大屏单块模板</figcaption></figure><p>当添加第二个 大屏单块模板 时，直接把第一个复制一份，调整位置、service组件的接口、dataFilter配置等。</p><p>至此大屏就配置完成了。</p>',6);function G(J,K){const t=p("ExternalLinkIcon"),o=p("AutoCatalog");return k(),v("div",null,[_,y,n("p",null,[s("首先查看效果展示 "),n("a",x,[s("泛积木-低代码大屏展示"),a(t)]),s("。")]),w,n("p",null,[s("缩放容器组件支持配置 设计稿宽度、设计稿高度、样式名称、背景颜色，当要适配不同尺寸的屏幕时，我们只需要修改 设计稿宽度、设计稿高度 为对应尺寸即可。样式名称是添加您需要设置的 "),n("a",q,[s("样式"),a(t)]),s(" 或添加唯一的"),C,s("，"),I,s("作用的元素将作为后续全屏按钮点击时全屏的元素。")]),N,n("p",null,[z,s(" 是配置 "),n("a",S,[s("SchemaNode"),a(t)]),s(" , SchemaNode 是指每一个 amis 配置节点的类型，支持模板、Schema（配置）以及SchemaArray（配置数组）三种类型。")]),E,n("p",null,[s("大屏单块模板组件 是用于配置大屏每块内容，大屏布局组件 和 大屏单块模板组件 之间还有一层 "),n("a",F,[s("grid-2d 组件"),a(t)]),s("。")]),j,n("p",null,[A,s(" 是使用 "),n("a",B,[s("grid"),a(t)]),s(" 布局，支持配置 外层 Dom 的类名、格子划分、格子垂直高度、格子间距、格子行间距，建议 大屏布局组件 -> 总体配置 -> 页面内容 -> 内边距 和格子间距设置一致，格子划分 指定 划分为几列，格子间距统一设置横向和纵向的间距，格子行间距可以设置横向间距，优先级高于格子间距。")]),L,n("p",null,[V,s(" 是配置 "),n("a",$,[s("SchemaNode"),a(t)]),s(" , SchemaNode 是指每一个 amis 配置节点的类型，支持模板、Schema（配置）以及SchemaArray（配置数组）三种类型。")]),D,n("p",null,[M,s("首先嵌套 "),n("a",O,[s("Service 功能型容器"),a(t)]),s(" 用于获取数据，再使用 "),n("a",P,[s("Chart 图表"),a(t)]),s(" 进行图表渲染。")]),n("p",null,[s("如果需要轮流高亮 Chart 图表的每个数据，例如 "),n("a",T,[s("大屏动态展示"),a(t)]),s(" 可以使用如下配置：")]),n("ol",null,[n("li",null,[s("在 "),n("a",W,[s("Chart 图表"),a(t)]),s(" 上添加唯一的 "),H,s(" ；")]),R,X]),Y,a(o)])}const tn=d(f,[["render",G],["__file","index.html.vue"]]);export{tn as default};