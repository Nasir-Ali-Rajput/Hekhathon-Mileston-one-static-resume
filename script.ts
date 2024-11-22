
// experience section  //
let exp_section: HTMLElement|null = document.getElementById('experience')
let exp_btn: HTMLElement|null = document.getElementById('exp_btn')

exp_btn?.addEventListener('click', () => {
    exp_section!.classList.toggle('hide')
});



// reference section //
let ref_section: HTMLElement|null = document.getElementById('ref');
let ref_btn: HTMLElement|null = document.getElementById('ref_btn');

ref_btn?.addEventListener('click', ()=>{
    ref_section!.classList.toggle('hide')
});



// edu section //
let edu_section: HTMLElement|null = document.getElementById('edu');
let edu_btn: HTMLElement|null = document.getElementById('edu_btn');

edu_btn?.addEventListener('click', ()=>{
    edu_section!.classList.toggle('hide')
});



// print section //
let print_btn: HTMLElement|null = document.getElementById('print_btn');

print_btn?.addEventListener('click', ()=> {
    window.print()
})