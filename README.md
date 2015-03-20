toasty
===========

Show Dan Forden's Toasty from Mortal Kombat as an Easter Egg for your website

###Usage

```html
<button id="toasty-button" style="padding:10px;">Show toasty</button>
 
<script>
    $(document).ready( function(){
        
        $("body").toasty();

        $("#toasty-button").click( function(){
             $("body").toasty('pop');
        });

    });
</script>
```

###Demo and examples
[rubentd.com/toasty](http://rubentd.com/toasty)
