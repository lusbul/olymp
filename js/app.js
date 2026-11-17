const topicNumber=Number(new URLSearchParams(location.search).get('topic')||1);
const ACTIVE_TASKS=topicNumber===8?TASKS8:topicNumber===7?TASKS7:topicNumber===6?TASKS6:topicNumber===5?TASKS5:topicNumber===4?TASKS4:topicNumber===3?TASKS3:topicNumber===2?TASKS2:TASKS;
const STORE_SUFFIX='-topic'+topicNumber;
let selected=0, busy=false;const $=id=>document.getElementById(id);const saved=()=>{try{return JSON.parse(localStorage.getItem('buch-solutions-v1'+STORE_SUFFIX)||'{}')}catch{return {}}};const completed=()=>{try{return JSON.parse(localStorage.getItem('buch-completed-v1'+STORE_SUFFIX)||'{}')}catch{return {}}};const setStorage=(key,obj)=>{try{localStorage.setItem(key,JSON.stringify(obj))}catch{}};
function renderMenu(){const c=completed();$('taskMenu').innerHTML='';ACTIVE_TASKS.forEach((t,i)=>{const b=document.createElement('button');b.className='taskmenuitem '+(selected===i?'active':'');b.textContent=`${c[t.id]?'✓':'○'}  ${i+1}. ${t.name}`;b.onclick=()=>select(i);$('taskMenu').append(b)});const n=ACTIVE_TASKS.filter(t=>c[t.id]).length;$('progressFill').style.width=`${n/ACTIVE_TASKS.length*100}%`;$('progressLabel').textContent=`${n} із ${ACTIVE_TASKS.length} задач розв’язано`;}

function renderSimulator(){
 const t=ACTIVE_TASKS[selected], holder=$('simFields');
 holder.replaceChildren();
 const label=document.createElement('label');label.textContent='Вхідні дані для дослідження';
 const ta=document.createElement('textarea');ta.rows=2;ta.id='simInput';ta.value=t.exampleIn;ta.style.width='100%';
 label.append(ta);holder.append(label);
 $('simOutput').textContent='Змініть дані та натисніть «Показати кроки».';
 $('simDescription').textContent=t.skill+' — спробуйте інші значення, щоб перевірити закономірність.';
}
$('simBtn').onclick=()=>{
 const t=ACTIVE_TASKS[selected], inp=$('simInput').value.trim();
 if(topicNumber>=5&&topicNumber<=8){
 try{
  const t=ACTIVE_TASKS[selected], inp=$('simInput').value;
  let lines=[];
  if(topicNumber===5){
   const arr=inp.trim().split(/\s+/).map(Number), a=arr.slice(selected===1||selected===3||selected===4?2:1);
   lines.push('Вхідний список: '+a.join(', '));
   if(selected===0||selected===2)lines.push('Упорядковані значення: '+[...a].sort((x,y)=>x-y).join(', '));
   if(selected===1||selected===3||selected===4)lines.push('Ціль: '+arr[1]);
   lines.push('Порівняйте елементи та знайдіть відповідь у власній програмі.');
  }else if(topicNumber===6){
   const str=inp.split('\n')[0];lines.push('Символів у першому рядку: '+str.length);lines.push('Перші символи: '+[...str].slice(0,15).join(' · '));
   lines.push('Переберіть позиції рядка та перевірте потрібну умову.');
  }else if(topicNumber===7){
   const a=inp.trim().split(/\s+/);lines.push('Унікальні токени: '+new Set(a.slice(1)).size);lines.push('Для підрахунку частот використовуйте словник.');
  }else{
   const n=Number(inp.trim());lines.push('Початкове N: '+n);for(let i=0;i<Math.min(n,8);i++)lines.push('Крок '+(i+1)+': дослідіть можливі вибори');
   lines.push('Спробуйте сформулювати базовий випадок і перехід.');
  }
  $('simOutput').textContent=lines.join('\n');
 }catch(e){$('simOutput').textContent='Перевірте вхідні дані.'}
 }else if(topicNumber===4){
 try{
  const parts=inp.split(/\s+/).map(Number);let a,k;
  if(selected===2){const n=parts[0];k=parts[1];a=parts.slice(2,2+n)}else{const n=parts[0];a=parts.slice(1,1+n)}
  if(!a.length||a.some(v=>!Number.isFinite(v)))throw Error('Некоректні дані');
  const steps=[];let answer;
  if(selected===0){let sum=0;a.forEach((v,i)=>{sum+=v;if(i<12)steps.push(`Пакет ${i+1}: +${v}, сума ${sum}`)});answer=sum}
  if(selected===1){let max=a[0];a.forEach((v,i)=>{max=Math.max(max,v);if(i<12)steps.push(`Результат ${v}, рекорд ${max}`)});answer=max}
  if(selected===2){let count=0;a.forEach((v,i)=>{if(v>=k)count++;if(i<12)steps.push(`${v} ≥ ${k}: ${v>=k?'так':'ні'}, перепусток ${count}`)});answer=count}
  if(selected===3){let count=0;for(let i=1;i<a.length;i++){if(a[i]>a[i-1])count++;if(i<=12)steps.push(`${a[i-1]} → ${a[i]}: ${a[i]>a[i-1]?'збільшення':'ні'}, разом ${count}`)}answer=count}
  if(selected===4){const seen=new Set();a.forEach((v,i)=>{seen.add(v);if(i<12)steps.push(`Номер ${v}: різних ${seen.size}`)});answer=seen.size}
  $('simOutput').textContent=steps.join('\n')+(steps.length?'\n':'')+'Відповідь: '+answer;
 }catch(e){$('simOutput').textContent='Перевірте формат вхідних даних.'}
 }else if(topicNumber===3){
  try{const v=inp.split(/\s+/).map(Number),x=v[0],y=v[1];let lines=[];
   if(selected===0){const r=x%y;lines=[`${x} = ${Math.floor(x/y)} × ${y} + ${r}`,`Остача: ${r}`];}
   if(selected===1){const a=x,b=y;let p=a,q=b;while(q!==0){lines.push(`${p} = ${Math.floor(p/q)} × ${q} + ${p%q}`);[p,q]=[q,p%q];}lines.push(`НСД(${a}, ${b}) = ${p}`);}
   if(selected===2){let prime=x>=2;for(let d=2;d*d<=x;d++){if(d<=15)lines.push(`Перевіряємо дільник ${d}: ${x%d===0?"ділиться":"не ділиться"}`);if(x%d===0){prime=false;break;}}lines.push(prime?"Число просте":"Число складене або менше 2");}
   if(selected===3){const k=Math.ceil(x/y);lines=[`${x} предметів, по ${y} у коробці`,`Повних коробок: ${Math.floor(x/y)}`,`Потрібно коробок: ${k}`];}
   if(selected===4){const a=x,b=y;const g=(p,q)=>q?g(q,p%q):p;lines=[`НСД(${a}, ${b}) = ${g(a,b)}`,`НСК = (${a} × ${b}) / ${g(a,b)} = ${a/g(a,b)*b}`];}
   $("simOutput").textContent=lines.join("\n");
  }catch(e){$("simOutput").textContent="Перевірте вхідні дані.";}
 }else if(topicNumber===2){
  const a=inp.split(/\s+/).map(Number),n=a[0];let steps=[],ans='';
  if(selected===0){let sum=0;for(const [i,v] of a.slice(1,1+n).entries()){sum+=v;if(i<12)steps.push(`Крок ${i+1}: +${v}, сума ${sum}`)}ans=`Усього: ${sum}`;}
  if(selected===1){let d=0,sum=0;while(sum<n&&d<50000){d++;sum+=d;if(d<=12)steps.push(`День ${d}: сума ${sum}`)}ans=`Потрібно днів: ${d}`;}
  if(selected===2){let count=0;for(const [i,v] of a.slice(1,1+n).entries()){if(v>0)count++;if(i<12)steps.push(`Сигнал ${v}: ${v>0?'успіх':'ні'}, лічильник ${count}`)}ans=`Успішних сигналів: ${count}`;}
  if(selected===3){let [charge,b,target]=a,minutes=0;while(charge<target&&minutes<100){minutes++;charge=Math.min(100,charge+b);if(minutes<=12)steps.push(`Хвилина ${minutes}: ${charge}%`)}ans=`Хвилин: ${minutes}`;}
  if(selected===4){let v=BigInt(inp||'0'),sum=0;while(v>0n){const digit=Number(v%10n);sum+=digit;steps.push(`Цифра ${digit}, сума ${sum}`);v/=10n;}ans=`Сума цифр: ${sum}`;}
  $('simOutput').textContent=steps.join('\n')+(steps.length?'\n':'')+ans;
 }else $('simOutput').textContent='Для цього розділу використайте приклад і перевірте його у Python Code Runner.';
};

function select(i){if(busy)return;selected=i;const t=ACTIVE_TASKS[i];$('taskNumber').textContent=`Задача ${i+1} із 5`;$('taskTitle').textContent=t.name;$('taskStory').textContent=t.story;$('taskInput').textContent=t.input;$('taskOutput').textContent=t.output;$('taskHint').textContent=t.hint;$('taskTheory').textContent=t.theory||'Дослідіть дані, знайдіть закономірність і запишіть алгоритм.';renderSimulator();$('exampleIn').textContent=t.exampleIn;$('exampleOut').textContent=t.exampleOut;$('editor').value=saved()[t.id]??t.starter;$('stdin').value=t.exampleIn;$('consoleText').textContent='Тут з’явиться результат виконання програми.';$('result').hidden=true;$('prevBtn').disabled=i===0;$('nextBtn').disabled=i===ACTIVE_TASKS.length-1;renderMenu();}
$('editor').addEventListener('input',()=>{const s=saved();s[ACTIVE_TASKS[selected].id]=$('editor').value;setStorage('buch-solutions-v1'+STORE_SUFFIX,s)});
function execPython(code,inputs,timeout=12000){return new Promise((resolve,reject)=>{const w=new Worker('js/runner-worker.js');let done=false;const stop=(fn,val)=>{if(done)return;done=true;clearTimeout(timer);w.terminate();fn(val)};const timer=setTimeout(()=>stop(reject,new Error('Перевищено ліміт часу. Перевірте, чи немає нескінченного циклу.')),timeout);w.onmessage=e=>e.data.ok?stop(resolve,e.data.outputs):stop(reject,new Error(e.data.error));w.onerror=e=>stop(reject,new Error('Не вдалося завантажити Python. Перевірте інтернет-з’єднання.'));w.postMessage({code,inputs});});}
function setBusy(v,msg){busy=v;$('runBtn').disabled=v;$('submitBtn').disabled=v;$('resetBtn').disabled=v;$('engineStatus').textContent=msg;}
function norm(s){return s.trim().replace(/\r/g,'').split('\n').map(l=>l.trim().replace(/\s+/g,' ')).join('\n')}
$('runBtn').onclick=async()=>{setBusy(true,'Завантаження / виконання Python…');$('result').hidden=true;$('consoleText').textContent='Виконуємо програму…';try{const out=await execPython($('editor').value,[$('stdin').value],20000);$('consoleText').textContent=out[0]||'(Програма нічого не вивела)'}catch(e){$('consoleText').textContent='Помилка: '+e.message}finally{setBusy(false,'Python готовий до запуску')}};
$('submitBtn').onclick=async()=>{setBusy(true,'Перевіряємо 10 тестів…');$('consoleText').textContent='Перевірка триває. Вхідні дані тестів не показуються.';$('result').hidden=true;const t=ACTIVE_TASKS[selected];try{const outs=await execPython($('editor').value,t.tests.map(x=>x.input),20000);const pass=outs.map((out,i)=>norm(out)===norm(t.tests[i].expected));const n=pass.filter(Boolean).length;const pct=n*10;$('result').hidden=false;$('result').innerHTML=`<h3>Результат перевірки: ${n}/10 · ${pct}%</h3><div class="testbar">${pass.map((v,i)=>`<span class="${v?'pass':'fail'}" title="Тест ${i+1}: ${v?'пройдено':'не пройдено'}">${i+1}</span>`).join('')}</div><p>${n===10?'🏆 Вітаємо! Буч успішно пройшов усі тести!':'🐾 Буч радить перевірити крайні випадки та спробувати ще раз.'}</p><small>Вхідні дані й правильні відповіді прихованих тестів не відображаються.</small>`;$('consoleText').textContent=`Перевірено 10 тестів. Пройдено: ${n}. Не пройдено: ${10-n}.`;if(n===10){const c=completed();c[t.id]=true;setStorage('buch-completed-v1'+STORE_SUFFIX,c);renderMenu();}}catch(e){$('consoleText').textContent='Перевірка не завершена: '+e.message}finally{setBusy(false,'Python готовий до запуску')}};
$('resetBtn').onclick=()=>{if(!confirm('Повернути початковий код цієї задачі?'))return;const t=ACTIVE_TASKS[selected];$('editor').value=t.starter;const s=saved();delete s[t.id];setStorage('buch-solutions-v1'+STORE_SUFFIX,s)};
$('prevBtn').onclick=()=>select(selected-1);$('nextBtn').onclick=()=>select(selected+1);select(0);
