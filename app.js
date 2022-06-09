var app = Vue.createApp({
    data() {
        return {
              enabled:true,
              confirmed:false,
              name:"",
              mobile:"",
              appliedcoupon: null,
              couponcode: "",
              coupons: [
                {
                  code: "100TAKAOFF",
                  discount: 100
                },
                {
                  code: "200TAKAOFF",
                  discount: 200
                }
              ],
               seatstates:{
                   sold:{
                       text:"sold",
                       color:"#ff0000"
                   },
                   available:{
                       text:"available",
                       color:"#dddddd"
                   },
                   booked:{
                    text:"booked",
                    color:"#adadad"
                },
                selected:{
                    text:"selected",
                    color:"#0cff03"
                }
               },
               seats: [
                {
                  name: "A1",
                  type: "available",
                  price: 500
                },
                {
                  name: "A2",
                  type: "available",
                  price: 500
                },
                {
                  name: "A3",
                  type: "available",
                  price: 500
                },
                {
                  name: "A4",
                  type: "available",
                  price: 500
                },
                {
                  name: "B1",
                  type: "available",
                  price: 450
                },
                {
                  name: "B2",
                  type: "available",
                  price: 450
                },
                {
                  name: "B3",
                  type: "available",
                  price: 450
                },
                {
                  name: "B4",
                  type: "available",
                  price: 450
                },
                {
                  name: "C1",
                  type: "sold",
                  price: 500
                },
                {
                  name: "C2",
                  type: "sold",
                  price: 500
                },
                {
                  name: "C3",
                  type: "sold",
                  price: 500
                },
                {
                  name: "C4",
                  type: "sold",
                  price: 500
                },
                {
                  name: "D1",
                  type: "available",
                  price: 400
                },
                {
                  name: "D2",
                  type: "available",
                  price: 400
                },
                {
                  name: "D3",
                  type: "available",
                  price: 400
                },
                {
                  name: "D4",
                  type: "available",
                  price: 400
                },
                {
                  name: "E1",
                  type: "available",
                  price: 300
                },
                {
                  name: "E2",
                  type: "available",
                  price: 300
                },
                {
                  name: "E3",
                  type: "booked",
                  price: 300
                },
                {
                  name: "E4",
                  type: "booked",
                  price: 300
                },
                {
                  name: "F1",
                  type: "available",
                  price: 300
                },
                {
                  name: "F2",
                  type: "available",
                  price: 300
                },
                {
                  name: "F3",
                  type: "available",
                  price: 300
                },
                {
                  name: "F4",
                  type: "available",
                  price: 300
                }
              ]
            };
            
        },
        watch:{
          couponcode(newvalue){
            if(newvalue.length === 10){
              let searchedcoupons = this.coupons.filter(
                (item) => item.code === newvalue
              );

              if(searchedcoupons.length === 1){
                this.appliedcoupon = searchedcoupons[0];
                this.couponcode ="";
              }
              else{
                alert ("not valid");
              }
  
            }
           
          }
          
           
        },
        computed:{
          selectedseats(){
            let sc=this.seats.filter((item)=> item.type == "selected");
            return sc;
          },

          totalcost(){
            let tc = 0;
            this.selectedseats.forEach(seat => {
              tc += seat.price;
            });

            if(this.appliedcoupon!== null){
              tc = tc - this.appliedcoupon.discount;
            }
            return tc;

          }
            
        },
        methods: {
          handleclick(i){
            let clickedseat=this.seats[i];
            if(clickedseat.type==="sold"||clickedseat.type==="booked"){
              alert("you can't select this seat");
              return;
            }
            if(this.selectedseats.length>2){
              alert("you can't select more than 3 seats");
              return;
            }
            clickedseat.type = clickedseat.type === "selected" ? "available" : "selected";
            console.log(clickedseat)
          },
          confirm(){
            
            if(!this.name || !this.mobile){
              // this.enabled = false;
              alert("enter name and number");
              return;
            }      
            this.confirmed = true;

            },
            
          
          resetdata(){
            this.confirmed=false;
            this.name="";
            this.mobile="";
            this.appliedcoupon=null;

            this.seats.forEach((seat)=>{
              if(seat.type==="selected"){
                seat.type="sold";
              }
            });
          }
           
        }
});
app.mount("#app");


