public class myClass {

  public myClass(){}
  
  public myMethod(){
    XElement comprasNoWebsite = XElement.Load(“dump.xml”);
    //Consulta LINQ
    IEnumerable<string> partNumbers =  from item in purchaseOrder.Descendants("Item")
                               select (string) item.Attribute("PartNumber"); 
    Console.WriteLine(partNumbers);
  }
  
}


