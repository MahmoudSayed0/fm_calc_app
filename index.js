document.addEventListener('alpine:init', () => {
Alpine.data('app', () => ({
    day: '',
    month: '',
    year: '',
    errorD:'invalid day!',
    errorM:'invalid month!',
    errorY:'must be in past!',
    showErrorD: false,
    showErrorM: false,
    showErrorY: false,
    textDay:'- -',
    textMonth:'- -',
    textYear:'- -',
    flag: true,

    vaildDay(){
        if(this.day > 31 || this.day == ''){
            this.showErrorD = true;
            this.errorD
            this.flag = false;
        }else{
            this.showErrorD=false;

        }
    },
    vaildMonth(){

        if(this.month > 12 || this.month == ''){
            this.showErrorM = true;
            this.errorM
            this.flag = false;

            console.error(this.errorM);
        }else{
            this.showErrorM=false;

        }

    },
     vaildYear(){
        if(this.year > 2024 || this.year == ''){
            this.showErrorY = true;
            this.errorY
            this.flag = false;

        }else{
            this.showErrorY=false;
        }
    },
    calcYourAge() {
        // const d = moment(this.month)._i - (moment().month() + 1);
        // const m = moment().subtract(this.month, 'month').calendar();
        // const y = moment().subtract(this.year, 'year').calendar();
        // console.log(d);
        this.flag = true;
    while(this.vaildYear() || this.vaildMonth() || this.vaildDay()){
        this.flag = false;
        
    }
    if(this.flag){


        // console.log(moment().diff(moment('20010620', 'YYYYMMDD'), 'years'))

        const date =  new Date();
        let years = date.getFullYear() - this.year - 1
        let months =  (date.getMonth()+1) - this.month + 12
        let days = date.getDate() - this.day

        /*
        also modulo the days (31) and month (12) another way to solve but i prefered direct method
        cuz of anyone need to understand what is going on he can get it easily
        or maybe i do not know :D google it
        */

        
        /* 
        
        Also every month has spesfic days  so we should add that in our calculation
        but as this need a lib or make date form with date input directly if this needs
        to be professional in output the result as FrontEnd we focus on the UI output and
        preformance in app
        
        */

        if( this.day == date.getDate()){
            this.textDay = 0
            this.textMonth = 12 - months
        } else if(this.day > date.getDate()){
            this.textDays = 31 - days
            months--
        } else{
            this.textDay = days
        }
        if(months == 12) {
            years++
        }
        this.textDay = days
        this.textMonth = months
        this.textYear = years


    }

    console.log(this.flag);

}

}))
})