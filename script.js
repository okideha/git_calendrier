        "use strict";
        function createCalendar(elem){
            let container=document.querySelector('.calendar');
            let tWeek;
            let tBody;
            let title;
            let currentMonth=new Date();

            const DAYS = {
                    DIMANCHE:   0,
                    LUNDI:      1,
                    MARDI:      2,
                    MERCREDI:   3,
                    JEUDI:      4,
                    VENDREDI:   5,
                    SAMEDI:     6
                }
            
            function initialisation(){
                currentMonth.setDate(1);//1er jour du mois courant
                
                let calendar=document.createElement("table");
                tBody = document.createElement('tbody');

                calendar.innerHTML=" ";
                calendar.className="container";
                
                tWeek=document.createElement("tr");
                
                let btnNext=document.createElement("button");
                let btnPrevious=document.createElement("button");
                
                btnPrevious.innerHTML="<";
                btnPrevious.className="button";
                btnPrevious.addEventListener("click",precedant);
                
                btnNext.innerHTML=">";
                btnNext.className="button";
                btnNext.addEventListener("click",suivant);
                
                title=document.createElement("span");
                title.className="title";
                
                container.appendChild(btnPrevious);
                container.appendChild(title);
                container.appendChild(btnNext);
                tWeek.innerHTML="<th>Lundi</th><th>Mardi</th><th>Mercredi</th><th>Jeudi</th><th>Vendredi</th><th>Samedi</th><th>Dimanche</th><tr>";
                tBody.style.borderTop="1px solid #888";
                
                calendar.appendChild(tWeek);
                calendar.appendChild(tBody);
                container.appendChild(calendar);
                
                generate();
            }
            //----------------------
            function generate(){
                
                tBody.innerHTML="";
                let countDays=new Date(currentMonth.getFullYear(),currentMonth.getMonth(),currentMonth.getDate(),0,0,0,0);
                
                countDays.setMonth(currentMonth.getMonth()+1);
                countDays.setDate(currentMonth.getDate()-1);
                
                let maxDays=countDays.getDate(); 
                let firstDay=currentMonth.getDay()-1;
                
                let nameMonth=['Janvier','Février','Mars','Avril','Mai','Juin','Juillet', 'Août','Septembre','Octobre','Novembre','Décembre']
                
                title.innerHTML=nameMonth[currentMonth.getMonth()]+" "+currentMonth.getFullYear();
                
                tBody.insertAdjacentHTML("beforeend", "<tr>");  
                let day = currentMonth.getDay();

                for(let i=0;i<firstDay;i++){   
                    let tdElt=document.createElement("td");
                    tdElt.innerHTML=" ";
                    tdElt.style.textAlign="center";
                    tBody.appendChild(tdElt);

                    if(day === DAYS.DIMANCHE){
                        tBody.insertAdjacentHTML("beforeend", "</tr>");
                        tBody.insertAdjacentHTML("beforeend", "<tr>");
                    }

                    day++;
                    if (day > 6) day = 0;
                }
            

                
                for(let i=0;i<maxDays;i++){
                    if(day === DAYS.LUNDI)
                        tBody.insertAdjacentHTML("beforeend", "<tr>");

                    let dayElt=document.createElement("td");
                    dayElt.innerHTML=(i+1);
                    dayElt.style.textAlign="center";
                    tBody.appendChild(dayElt);

                    if(day === DAYS.DIMANCHE){
                        tBody.insertAdjacentHTML("beforeend", "</tr>");
                        tBody.insertAdjacentHTML("beforeend", "<tr>");
                    }

                    day++;
                    if (day > 6) day = 0;
                }
                
                let lastDay=currentMonth.getDay();
                
                for(let i=0;i<lastDay;i++){
                    let day=document.createElement("td");
                    day.innerHTML="";
                    day.style.textAlign="center";
                    tBody.appendChild(day);
                }
                
            }
            //-------------------
            function suivant(){
                currentMonth.setMonth(currentMonth.getMonth()+1);
                generate();
                
            }
            //---------------------
            function precedant(){
                currentMonth.setMonth(currentMonth.getMonth()-1);
                generate();
                
            }
            //--------------------------
            initialisation();
        }
    
        createCalendar();