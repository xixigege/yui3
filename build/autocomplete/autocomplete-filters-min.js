YUI.add("autocomplete-filters",function(d){var c=d.Array,e=d.Object,a=d.Unicode.WordBreak,b=d.mix(d.namespace("AutoCompleteFilters"),{charMatch:function(i,h,f){var g=c.unique((f?i:i.toLowerCase()).split(""));return c.filter(h,function(j){if(!f){j=j.toLowerCase();}return c.every(g,function(k){return j.indexOf(k)!==-1;});});},charMatchCase:function(g,f){return b.charMatch(g,f,true);},phraseMatch:function(h,g,f){if(!f){h=h.toLowerCase();}return c.filter(g,function(i){return(f?i:i.toLowerCase()).indexOf(h)!==-1;});},phraseMatchCase:function(g,f){return b.phraseMatch(g,f,true);},startsWith:function(h,g,f){if(!f){h=h.toLowerCase();}return c.filter(g,function(i){return(f?i:i.toLowerCase()).indexOf(h)===0;});},startsWithCase:function(g,f){return b.startsWith(g,f,true);},wordMatch:function(j,h,f){var g={ignoreCase:!f},i=a.getUniqueWords(j,g);return c.filter(h,function(k){var l=c.hash(a.getUniqueWords(k,g));return c.every(i,function(m){return e.owns(l,m);});});},wordMatchCase:function(g,f){return b.wordMatch(g,f,true);}});},"@VERSION@",{requires:["array-extras","unicode-wordbreak"]});