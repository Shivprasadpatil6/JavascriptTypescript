let responseTime=850;
let sla=1000;
let slaStatus=responseTime<= sla ? "Within SLA" :"SLA breached";
console.log(`Response: ${responseTime} ms -${slaStatus}`);
console.log(`what is the SLA time ? - ${sla}`);