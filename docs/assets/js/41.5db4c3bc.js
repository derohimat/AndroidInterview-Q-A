(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{213:function(e,i,t){"use strict";t.r(i);var a=t(0),n=Object(a.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("div",{staticClass:"content"},[t("h4",{attrs:{id:"优化自定义view百度-乐视-小米"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#优化自定义view百度-乐视-小米","aria-hidden":"true"}},[e._v("#")]),e._v(" 优化自定义view百度-乐视-小米")]),e._v(" "),t("p",[e._v("为了加速你的view，对于频繁调用的方法，需要尽量减少不必要的代码。先从onDraw开始，需要特别注意不应该在这里做内存分配的事情，因为它会导致GC，从而导致卡顿。在初始化或者动画间隙期间做分配内存的动作。不要在动画正在执行的时候做内存分配的事情。")]),e._v(" "),t("p",[e._v("你还需要尽可能的减少onDraw被调用的次数，大多数时候导致onDraw都是因为调用了invalidate().因此请尽量减少调用invaildate()的次数。如果可能的话，尽量调用含有4个参数的invalidate()方法而不是没有参数的invalidate()。没有参数的invalidate会强制重绘整个view。")]),e._v(" "),t("p",[e._v("另外一个非常耗时的操作是请求layout。任何时候执行requestLayout()，会使得Android UI系统去遍历整个View的层级来计算出每一个view的大小。如果找到有冲突的值，它会需要重新计算好几次。另外需要尽量保持View的层级是扁平化的，这样对提高效率很有帮助。")]),e._v(" "),t("p",[e._v("如果你有一个复杂的UI，你应该考虑写一个自定义的ViewGroup来执行他的layout操作。与内置的view不同，自定义的view可以使得程序仅仅测量这一部分，这避免了遍历整个view的层级结构来计算大小。这个PieChart 例子展示了如何继承ViewGroup作为自定义view的一部分。PieChart 有子views，但是它从来不测量它们。而是根据他自身的layout法则，直接设置它们的大小。")])])}],!1,null,null,null);n.options.__file="优化自定义view百度-乐视-小米.md";i.default=n.exports}}]);