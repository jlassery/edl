<script>
   #abertura do arquivo
   xmlDoc = xmlhttp.open("GET", "dump.xml");
   #parse do arquivo
   let x = xmlDoc.getElementsByTagName("Item"); 
   partNumbers = []
   for (let i = 0; i < x.length; i++){
       var pn = x[i].getAttribute(“Part Number);
       partNumbers.insert(pn);
   }
   Console.log(partNumbers)
</script>
