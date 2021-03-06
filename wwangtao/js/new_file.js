"use strict";
! function(e, s, n) {
	var t = "https://g.csdnimg.cn/user-tooltip/2.1/",
		i = {
			company: "<img src=" + t + "images/icon-company.png />",
			domainGrey: "<img src=" + t + "images/icon-domain-grey.png />",
			domain: "<img src=" + t + "images/icon-domain.png />",
			vip: "<img src=" + t + "images/icon-vip.png />",
			writer: "<img src=" + t + "images/icon-writer.png />"
		},
		a = {
			getUserProfileUrl: "https://me.csdn.net/api/external/user/getUserProfile",
			checkFollowUrl: "https://me.csdn.net/api/relation/check",
			doFollowUrl: "https://me.csdn.net/api/relation/create",
			doUnfollowUrl: "https://me.csdn.net/api/relation/destroy",
			ref: "miniprofile",
			defaultUserProfile: {
				username: "yanlinpu",
				avatarurl: "https://profile.csdnimg.cn/1/1/B/1_yanlinpu",
				vip: !1,
				expert: !1,
				nickname: "木林森001",
				fans_num: "2万",
				identity: [{
					name: "专家"
				}, {
					name: "版主"
				}],
				medal: [{
					type: "203",
					codename: "111",
					image: "https://g.csdnimg.cn/static/user-medal/1024huodong.svg"
				}]
			}
		};
	if(void 0 === e.csdn && (e.csdn = {}), !jQuery) return !1;
	! function(e) {
		var n = s.createElement("link");
		n.rel = "stylesheet", n.type = "text/css", n.href = e, s.getElementsByTagName("head")[0].appendChild(n)
	}(t + "user-tooltip.css"), e.csdn.userTooltip = function(t) {
		function o() {
			v[m].flag && (n("#csdn-userTooltip .person_deliver").mouseover(function() {
				n(this).hasClass("person_deliver_letter") && n(this).html("取&nbsp;&nbsp;&nbsp;消")
			}), n("#csdn-userTooltip .person_deliver").mouseout(function() {
				n(this).hasClass("person_deliver_letter") && n(this).html("已关注")
			})), n("#csdn-userTooltip .person_deliver").click(function() {
				var s, t;
				if(y) {
					var i = n(this);
					if(0 == v[m].flag) {
						if(!i.hasClass("person_deliver_letter_un")) return !1;
						s = a.doFollowUrl, n.ajax({
							type: "post",
							url: s,
							dataType: "json",
							xhrFields: {
								withCredentials: !0
							},
							crossDomain: !0,
							data: JSON.stringify({
								username: m
							}),
							success: function(s) {
								200 == parseInt(s.code) && (i.html("已关注").removeClass("person_deliver_letter_un").addClass("person_deliver_letter"), i.mouseover(function() {
									i.html("取&nbsp;&nbsp;&nbsp;消")
								}), i.mouseout(function() {
									i.html("已关注")
								})), e.csdn && e.csdn.watchBtnChange && e.csdn.watchBtnChange(1, m), v[m].flag = !0, v[m].followClass = "person_deliver person_deliver_letter", v[m].followStr = "已关注"
							}
						})
					} else t = a.doUnfollowUrl, n.ajax({
						type: "post",
						url: t,
						xhrFields: {
							withCredentials: !0
						},
						crossDomain: !0,
						data: JSON.stringify({
							username: m
						}),
						dataType: "json",
						success: function(s) {
							200 == parseInt(s.code) && (i.html("关注").removeClass("person_deliver_letter").addClass("person_deliver_letter_un"), i.unbind("mouseover"), i.unbind("mouseout")), e.csdn && e.csdn.watchBtnChange && e.csdn.watchBtnChange(0, m), v[m].flag = !1, v[m].followClass = "person_deliver person_deliver_letter_un", v[m].followStr = "关注"
						}
					})
				} else e.location.href = "https://passport.csdn.net/"
			})
		}

		function r(e) {
			var s, n = e.offset(),
				t = n.left,
				i = n.top,
				a = e.width(),
				o = e.height(),
				r = e[0].getBoundingClientRect(),
				l = {};
			return r && Number(r.top, 10) < 162 ? (s = "left:" + (t - 50 + a / 2) + "px;top:" + (i + o + 15) + "px", l.isBottom = !0) : s = "left:" + (t - 50 + a / 2) + "px;top:" + (i - 165) + "px", l.position = s, l
		}

		function l() {
			n("#csdn-userTooltip").remove()
		}
		t && n.extend(a, t);
		var c, d, p, m, u, f, h = {},
			v = {},
			g = "",
			_ = !1,
			w = '<svg id="csdnc-m-blank" viewBox="0 0 1024 1024" width="100%" height="100%" fill="#ccc"><path d="M516.266311 77.945505a8.788601 8.788601 0 0 0-8.532622 0L121.461878 292.455629a8.319307 8.319307 0 0 0-4.351637 7.252729v424.583284c0 2.986418 1.663861 5.75952 4.351637 7.252729l386.271811 214.510124a8.788601 8.788601 0 0 0 8.532622 0l386.271811-214.510124a8.319307 8.319307 0 0 0 4.351637-7.252729V299.708358a8.319307 8.319307 0 0 0-4.351637-7.252729L516.266311 77.945505z m37.671528-67.066412l386.314473 214.552788a85.027581 85.027581 0 0 1 43.900342 74.276477v424.583284c0 30.802766-16.809266 59.216399-43.943005 74.276477l-386.27181 214.552788c-26.024498 14.462795-57.808516 14.462795-83.875678 0l-386.314473-214.552788a85.027581 85.027581 0 0 1-43.900342-74.276477V299.708358c0-30.802766 16.809266-59.216399 43.943005-74.276477L470.019498 10.879093c26.024498-14.462795 57.808516-14.462795 83.875677 0z"></path></svg>';
		s.domain = "csdn.net";
		var y = function(e) {
			for(var n = s.cookie.split("; "), t = 0; t < n.length; t++) {
				var i = n[t].split("=");
				if(i[0] == e && "UD" == e) return decodeURIComponent(i[1]);
				if(i[0] == e) return decodeURI(i[1])
			}
		}("UserName");
		n(s).on("mouseenter", "img[username], #csdn-userTooltip", function(s) {
			function t(e, s, t, i, o, r, l, c, d, p, u, f, h, v, g, _) {
				g = g || "<a href='javascript:void(0)' class='person_deliver person_deliver_letter_un' style='float:right;'>关注</a>";
				var w = "<div id='csdn-userTooltip' style='" + f.position + "' data-mod='popu_60' class='tracking-ad" + (f.isBottom ? " csdn-userTooltip-pos" : " csdn-userTooltip-default") + "'><div class='person-info-div clearfix'><dt class='touxiang'><img src='" + e + "'></dt><div class='csdn-left-info'><dd class='person_info clearfix'><em class='name" + (s ? " name_short" : "") + (i ? " vipname" : "") + "'>" + t + "</em>" + v + "<span class='person-age'>码龄" + _ + "年</span></dd>" + d + h + "</div></div><div class='follow-div clearfix'>" + (r ? "<em class='fav'>粉丝 " + r + "</em>" : "") + g + "<a class='visoter'  target='_blank'href='http://me.csdn.net/" + m + "?ref=" + a.ref + "'>访问主页</a><a class='visoter' target='_blank' href='https://im.csdn.net/im/main.html?userName=" + m + "'>私信</a></div>";
				n("body").append(w)
			}

			function l() {
				n("#csdn-userTooltip").length && n("#csdn-userTooltip").remove(), m = u.attr("username");
				var s, l, c, d, T, C, x, U, b, k, j, B, F = "";
				if(!(p.closest("#csdn-userTooltip").length <= 0)) return !1;
				n("#csdn-userTooltip").remove(), v[m] ? (s = v[m].followClass, l = v[m].followStr, c = v[m].avatarurl, d = v[m].nickname, T = v[m].isVip, C = v[m].hasDomain, x = v[m].isBlogWriter, U = v[m].favsCount, b = v[m].interestname, k = v[m].huistr, B = v[m].age, F = r(u), f = T ? "<span class='icon_vip'>" + i.vip + "</span>" : "", f += x ? "<span class='icon_writer'>" + i.writer + "</span>" : "", g = C ? "<li class='has-domain'>" + i.domain + "<a href='https://" + C + ".blog.csdn.net'>" + C + ".blog.csdn.net</a></li>" : "<li class='medal no-domain'>" + i.domainGrey + "暂未设置自定义域名</li>", g = "<dd class='csdn-domain'>" + g + "</dd>", y ? (s && l && (j = "<a href='javascript:void(0)' class='" + s + "'>" + l + "</a>"), y === m && (j = ""), t(c, b, d, T, x, U, s, l, k, void 0, _, F, g, f, j, B), o()) : (t(c, b, d, T, x, U, s, l, k, void 0, _, F, g, f, j, B), n("#csdn-userTooltip .person_deliver").click(function() {
					e.location.href = "https://passport.csdn.net/"
				}))) : n.ajax({
					type: "get",
					url: a.getUserProfileUrl + "?username=" + m,
					contentType: "application/json",
					dataType: "json",
					xhrFields: {
						withCredentials: !0
					},
					crossDomain: !0,
					success: function(s) {
						var l, c, d, p, m, T, C, x, U, b, k, B, D, N = "",
							S = "",
							P = "",
							V = "",
							I = !1;
						if(200 === Number(s.code, 10)) {
							if(l = s.data || a.defaultUserProfile, !(B = l.username)) return !1;
							if(c = l.avatarurl, d = l.nickname || B, D = l.years, p = l.fans_num, m = l.vip, T = l.domain, C = l.expert, x = l.medal ? l.medal : [], U = x.length, U > 0 && (I = !0), f = m ? "<span class='icon_vip'>" + i.vip + "</span>" : "", f += C ? "<span class='icon_writer'>" + i.writer + "</span>" : "", g = T ? "<li class='has-domain'>" + i.domain + "<a href='https://" + T + ".blog.csdn.net'>" + T + ".blog.csdn.net</a></li>" : "<li class='medal no-domain'>" + i.domainGrey + "暂未设置自定义域名</li>", g = "<dd class='csdn-domain'>" + g + "</dd>", I) {
								x.length > 99999 ? (b = 99999, k = !0) : b = x.length;
								for(var E = 0; E < b; E++) P += "<li class='medal' title='" + x[E].codename + "'><img src='" + x[E].image + "' alt='胸章'></li>";
								k && (P += '<li class="medal medal-icon">' + w + x.length + "</li>"), P = "<dd class='medals'><ul>" + P + "</ul></dd>"
							} else P = "<li class='medal no-medals'>一个勋章都没有...</li>", P = "<dd class='medals'><ul>" + P + "</ul></dd>";
							if(null != l.identity)
								for(var G = 0; G < l.identity.length; G++) {
									l.identity[G].name && (G < l.identity.length - 1 ? V += l.identity[G].name + "<em>|</em>" : V += l.identity[G].name)
								}
							if(y) {
								var L = a.checkFollowUrl + "?follows=" + B;
								n.ajax({
									type: "get",
									url: L,
									xhrFields: {
										withCredentials: !0
									},
									dataType: "json",
									success: function(e) {
										var s;
										200 === e.code && e.data && (0 === e.data[B] ? (N = "person_deliver person_deliver_letter_un", S = "关注", _ = !1) : (N = "person_deliver person_deliver_letter", S = "已关注", _ = !0)), F = r(u), N && N && (s = "<a href='javascript:void(0)' class='" + N + "'style='float:right;'>" + S + "</a>"), y === B && (s = ""), t(c, V, d, m, C, p, N, S, P, U, _, F, g, f, s, D), h[B] = {}, h[B].avatarurl = c, h[B].nickname = d, h[B].isVip = m, h[B].hasDomain = T, h[B].isBlogWriter = C, h[B].favsCount = p, h[B].interestname = V, h[B].followClass = N, h[B].followStr = S, h[B].huistr = P, h[B].huicount = U, h[B].flag = _, h[B].age = D, v[B] = h[B], o()
									}
								})
							} else F = r(u), t(c, V, d, m, C, p, N, S, P, U, _, F, g, f, j, D), n("#csdn-userTooltip .person_deliver").click(function() {
								e.location.href = "https://passport.csdn.net/"
							}), h[B] = {}, h[B].avatarurl = c, h[B].nickname = d, h[B].isVip = m, h[B].hasDomain = T, h[B].isBlogWriter = C, h[B].favsCount = p, h[B].interestname = V, h[B].huistr = P, h[B].huicount = U, h[B].age = D, v[B] = h[B]
						}
					},
					error: function(e) {
						console.warn(e)
					}
				})
			}
			var s = s || e.event;
			return p = n(s.target || s.srcElement), u = n(this), clearTimeout(d), clearTimeout(c), null != n(this).attr("username") && (c = setTimeout(l, 200)), !1
		}), n(s).on("mouseleave", "img[username]", function(e) {
			return clearTimeout(c), d = setTimeout(l, 200), !1
		}), n(s).on("mouseleave", "#csdn-userTooltip", function(e) {
			return clearTimeout(d), l(), !1
		})
	}
}(window, document, jQuery), $(function() {
	window.csdn.userTooltip()
});