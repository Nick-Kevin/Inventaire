function _$(id){
    return document.getElementById(id);
}

function create_elt(elt){
    return document.createElement(elt);
}

window.addEventListener('load', function(e){
    e.preventDefault();
    fm = _$('formulaire');
    i=0, s=0;

    fm.addEventListener('submit',function(e){
        e.preventDefault();
        var desgn = _$('des').value;
        var pUnit = _$('pu').value;
        var nb = _$('nbr').value;
        
        if(desgn!=""){
            var tab = _$('corps');
            var tr = create_elt('tr');

            tab.appendChild(tr);

            var td1 = create_elt('td');
            var td2 = create_elt('td');
            var td3 = create_elt('td');
            var td4 = create_elt('td');

            tr.appendChild(td1);
            td1.id = 'desgn' + i;
            tr.appendChild(td2);
            td2.id = 'pu' + i;
            tr.appendChild(td3);
            td3.id = 'nb' + i;
            tr.appendChild(td4);
            td4.id = 'st' + i;
            var st = pUnit*nb;

            td1.innerHTML = desgn;
            td2.innerHTML = pUnit;
            td3.innerHTML = nb;
            td4.innerHTML = st;

            i++;
            s+=st;
            _$('des').value = "";
            _$('pu').value = "";
            _$('nbr').value = "";
        }
        else{
            var tab = _$('pieds');
            var trP = create_elt('tr');

            tab.appendChild(trP);

            var tdP1 = create_elt('td');
            trP.appendChild(tdP1);

            var tdP2 = create_elt('td');
            trP.appendChild(tdP2);

            tdP1.innerHTML = 'Total(en Ar)';
            tdP2.innerHTML = s;
        }
    });
});