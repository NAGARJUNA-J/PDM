import { Component, OnInit } from '@angular/core';
import { employees } from 'src/datamodel/employees';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-com',
  templateUrl: './com.component.html',
  styleUrls: ['./com.component.css']
})
export class ComComponent implements OnInit {
  emps:employees[]=[];
  fname:any;
  reactive: FormGroup;
empvariable : employees = new employees();
  constructor(private fb:FormBuilder) {
    this.reactive = this.fb.group({
    name: ['',[Validators.required, Validators.pattern('^[a-zA-Z ]*$')]],
    email: ['',[Validators.required,Validators.email]],
    phone: ['',[Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
    skill:['',[Validators.required]],
    id:[''],
    rad:[''],
    sel:[''],
    sel1:['']
    });
   }
   
   

  ngOnInit(): void {
    this.emps=[{"id":"4775","fname":"nagarjuna","state":"Andhra pradesh","phonenumber":"9505344178","skill":"Angular","country":"india",'email':"jayamangalanagarjuna@gmail.com"},
    {"id":"4774","fname":"Pavan","state":"Telangana","phonenumber":"9505344178","skill":"java","country":"india",'email':"jayamangalanagarjuna@gmail.com"},
    {"id":"4773","fname":"Krishna","state":"Goa","phonenumber":"9848043433","skill":"java","country":"india",'email':"jayamangalanagarjuna@gmail.com"},
    {"id":"4772","fname":"Rama Krishna ","state":"tamil nadu","phonenumber":"9912184243","skill":".Net","country":"india",'email':"jayamangalanagarjuna@gmail.com"},
    {"id":"4776","fname":"Swapna","state":"Arunachal pradesh","phonenumber":"95053444645","skill":"PHP","country":"india",'email':"jayamangalanagarjuna@gmail.com"},
    {"id":"4777","fname":"Swaroop","state":"Andhra pradesh","phonenumber":"9010311108","skill":"java","country":"india",'email':"jayamangalanagarjuna@gmail.com"},
    {"id":"4778","fname":"Miracle","state":"Andhra pradesh","phonenumber":"9666383882","skill":"Python","country":"india",'email':"jayamangalanagarjuna@gmail.com"},];
  }
  countryList: Array<any> = [
    { name: 'Germany', cities: ['Duesseldorf', 'Leinfelden-Echterdingen', 'Eschborn'] },
    { name: 'Spain', cities: ['Barcelona'] },
    { name: 'USA', cities: ['Downers Grove',' Alabama','Alaska','Arizona','Arkansas','Colorado','Connecticut',' Delaware','New Jersey','New Mexico','Wisconsin','Florida',' Georgia','Indiana',' New York','Washington','Montana','Massachusetts','South Dakota']},
    { name: 'Mexico', cities: ['Puebla'] },
    { name: 'China', cities: ['Beijing','Anhui','Fujian','Gansu','Guangdong','Guizhou','Hainan','Heilongjiang','Hebei'] },
    { name: 'India', cities: ['Andhra pradesh','Arunachal Pradesh','Assam','Bihar','Chhattisgarh','Goa','Gujarat','Haryana','Himachal Pradesh','Jharkhand','Karnataka','Kerala','Madhya Pradesh','Maharashtra','Manipur','Meghalaya','Mizoram','Nagaland','Odisha','Punjab','Sikkim','Tamil Nadu','Telangana','Tripura',' Uttar Pradesh','Uttarakhand','West Bengal'] },
  ];
  cities: Array<any>;
  changeCountry(count) {
    this.cities = this.countryList.find(con => con.name == count).cities;
  }
 
  Search(){
    if(this.fname !="")
    {
      this.fname=this.reactive.get('name').value;
    console.log(this.reactive.value)
    this.emps=this.emps.filter(res => {
      return  res.fname.toLocaleLowerCase().match(this.fname.toLocaleLowerCase()); })
    }
    else if(this.fname== "")
    {
      this.ngOnInit();
    }
  }
 
}
