var collect_registration = document.getElementById('collect-registration');
var proprietorship = document.getElementById('proprietorship');
var partnership = document.getElementById('partnership');
var company = document.getElementById('company');

var start_business = document.getElementById('start-business');
var planning = document.getElementById('planning');

var maintain_bank_acc = document.getElementById('maintain-bank-acc');
var book_of_acc = document.getElementById('book-of-acc');
var documentation = document.getElementById('documentation');
var reporting = document.getElementById('reporting');
var note = document.getElementById('note');
var legal_compliance = document.getElementById('legal-compliance');

var register_joint = document.getElementById('register-joint');
var monthly_vat = document.getElementById('monthly-vat');
var tax_return = document.getElementById('tax-return');

new LeaderLine(
    collect_registration,
    proprietorship,
    {
        color: '#C2DBFF',
        size: 1,
        startSocket: 'bottom',
        endSocket: 'top',
        path: 'grid',
        startSocketGravity: 0,
        endSocketGravity: 0,
        startPlug: 'behind',
        endPlug: 'arrow2',
        startPlugSize: 1,
        endPlugSize: 2
    });
    
new LeaderLine(
    collect_registration,
    partnership,
    {
        color: '#C2DBFF',
        size: 1,
        startSocket: 'bottom',
        endSocket: 'top',
        path: 'grid',
        startSocketGravity: 0,
        endSocketGravity: 0,
        startPlug: 'behind',
        endPlug: 'arrow2',
        startPlugSize: 1,
        endPlugSize: 2
    });

new LeaderLine(
    collect_registration,
    company,
    {
        color: '#C2DBFF',
        size: 1,
        startSocket: 'bottom',
        endSocket: 'top',
        path: 'grid',
        startSocketGravity: 0,
        endSocketGravity: 0,
        startPlug: 'behind',
        endPlug: 'arrow2',
        startPlugSize: 1,
        endPlugSize: 2
    });

new LeaderLine(
    start_business,
    planning,
    {
        color: '#C2DBFF',
        size: 1,
        startSocket: 'right',
        endSocket: 'left',
        path: 'grid',
        startSocketGravity: 0,
        endSocketGravity: 0,
        startPlug: 'arrow2',
        endPlug: 'arrow2',
        startPlugSize: 2,
        endPlugSize: 2
    });
    
new LeaderLine(
    planning,
    maintain_bank_acc,
    {
        color: '#C2DBFF',
        size: 1,
        startSocket: 'right',
        endSocket: 'left',
        path: 'grid',
        startSocketGravity: 0,
        endSocketGravity: 0,
        startPlug: 'behind',
        endPlug: 'arrow2',
        startPlugSize: 1,
        endPlugSize: 2
    });
new LeaderLine(
    planning,
    legal_compliance,
    {
        color: '#C2DBFF',
        size: 1,
        startSocket: 'right',
        endSocket: 'left',
        path: 'grid',
        startSocketGravity: 0,
        endSocketGravity: 0,
        startPlug: 'behind',
        endPlug: 'arrow2',
        startPlugSize: 1,
        endPlugSize: 2
    });
new LeaderLine(
    maintain_bank_acc,
    book_of_acc,
    {
        color: '#C2DBFF',
        size: 1,
        startSocket: 'bottom',
        endSocket: 'top',
        path: 'grid',
        startSocketGravity: 0,
        endSocketGravity: 0,
        startPlug: 'behind',
        endPlug: 'arrow2',
        startPlugSize: 1,
        endPlugSize: 2
    });
new LeaderLine(
    maintain_bank_acc,
    documentation,
    {
        color: '#C2DBFF',
        size: 1,
        startSocket: 'bottom',
        endSocket: 'top',
        path: 'grid',
        startSocketGravity: 0,
        endSocketGravity: 0,
        startPlug: 'behind',
        endPlug: 'arrow2',
        startPlugSize: 1,
        endPlugSize: 2
    });
new LeaderLine(
    maintain_bank_acc,
    reporting,
    {
        color: '#C2DBFF',
        size: 1,
        startSocket: 'bottom',
        endSocket: 'top',
        path: 'grid',
        startSocketGravity: 0,
        endSocketGravity: 0,
        startPlug: 'behind',
        endPlug: 'arrow2',
        startPlugSize: 1,
        endPlugSize: 2
    }); 

new LeaderLine(
    book_of_acc,
    note,
    {
        color: '#C2DBFF',
        size: 1,
        startSocket: 'bottom',
        endSocket: 'top',
        path: 'grid',
        startSocketGravity: 0,
        endSocketGravity: 0,
        startPlug: 'behind',
        endPlug: 'arrow2',
        startPlugSize: 1,
        endPlugSize: 2
    });
new LeaderLine(
    documentation,
    note,
    {
        color: '#C2DBFF',
        size: 1,
        startSocket: 'bottom',
        endSocket: 'top',
        path: 'grid',
        startSocketGravity: 0,
        endSocketGravity: 0,
        startPlug: 'behind',
        endPlug: 'arrow2',
        startPlugSize: 1,
        endPlugSize: 2
    });
new LeaderLine(
    reporting,
    note,
    {
        color: '#C2DBFF',
        size: 1,
        startSocket: 'bottom',
        endSocket: 'top',
        path: 'grid',
        startSocketGravity: 0,
        endSocketGravity: 0,
        startPlug: 'behind',
        endPlug: 'arrow2',
        startPlugSize: 1,
        endPlugSize: 2
    });

new LeaderLine(
    note,
    legal_compliance,
    {
        color: '#C2DBFF',
        size: 1,
        startSocket: 'bottom',
        endSocket: 'top',
        path: 'grid',
        startSocketGravity: 0,
        endSocketGravity: 0,
        startPlug: 'behind',
        endPlug: 'arrow2',
        startPlugSize: 1,
        endPlugSize: 2
    });


new LeaderLine(
    legal_compliance,
    register_joint,
    {
        color: '#C2DBFF',
        size: 1,
        startSocket: 'bottom',
        endSocket: 'top',
        path: 'grid',
        startSocketGravity: 0,
        endSocketGravity: 0,
        startPlug: 'behind',
        endPlug: 'arrow2',
        startPlugSize: 1,
        endPlugSize: 2
    });
new LeaderLine(
    legal_compliance,
    monthly_vat,
    {
        color: '#C2DBFF',
        size: 1,
        startSocket: 'bottom',
        endSocket: 'top',
        path: 'grid',
        startSocketGravity: 0,
        endSocketGravity: 0,
        startPlug: 'behind',
        endPlug: 'arrow2',
        startPlugSize: 1,
        endPlugSize: 2
    });
new LeaderLine(
    legal_compliance,
    tax_return,
    {
        color: '#C2DBFF',
        size: 1,
        startSocket: 'bottom',
        endSocket: 'top',
        path: 'grid',
        startSocketGravity: 0,
        endSocketGravity: 0,
        startPlug: 'behind',
        endPlug: 'arrow2',
        startPlugSize: 1,
        endPlugSize: 2
    });
