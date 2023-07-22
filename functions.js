
	let moedas = 0;
	let add = true;
	let clickers = document.querySelectorAll(".clickers input");

	class clicker{
		constructor(mps, price, qtd){
			this.mps = mps;
			this.price = price;
			this.qtd = qtd;
		}
		comprarClicker(){
			if((this.price <= moedas) && (add == true)) {
				let add = false;
				moedas -= this.price;
				this.qtd++;

				
			}
			return	this.qtd;
		}
		gerarMoedas(){
			return (this.mps * this.qtd);
		}

		gerandoPorSegundo(){
			return this.mps * this.qtd;
		}

	}
	let c1 = new clicker(1,10,0);
	let c2 = new clicker(20,500,0);
	let c3 = new clicker(75,2000,0);
	let c4 = new clicker(750,10000,0);
	let c5 = new clicker(2500,100000,0);
	let c6 = new clicker(10000,1000000,0);





		document.querySelector('.clicker-spot').addEventListener('click',()=>{

			moedas++;
			document.getElementById('contador-moedas').innerHTML = moedas;

		})

		
		
		const handleClick = (posClicker)=>{

			switch(posClicker){
				case 'c1':
					document.querySelectorAll('.clicker-box')[0].querySelector('p').innerHTML = c1.comprarClicker().toLocaleString('pt-BR');
					document.querySelectorAll('.clicker-box')[0].querySelector('h3').innerHTML = c1.gerandoPorSegundo().toLocaleString('pt-BR');
					break;
				case 'c2':
					document.querySelectorAll('.clicker-box')[1].querySelector('p').innerHTML = c2.comprarClicker().toLocaleString('pt-BR');
					document.querySelectorAll('.clicker-box')[1].querySelector('h3').innerHTML = c2.gerandoPorSegundo().toLocaleString('pt-BR');
					break;
				case 'c3':
					document.querySelectorAll('.clicker-box')[2].querySelector('p').innerHTML = c3.comprarClicker();
					document.querySelectorAll('.clicker-box')[2].querySelector('h3').innerHTML = c3.gerandoPorSegundo().toLocaleString('pt-BR');
					break;
				case 'c4':
					document.querySelectorAll('.clicker-box')[3].querySelector('p').innerHTML = c4.comprarClicker();
					document.querySelectorAll('.clicker-box')[3].querySelector('h3').innerHTML = c4.gerandoPorSegundo().toLocaleString('pt-BR');
					break;
				case 'c5':
					document.querySelectorAll('.clicker-box')[4].querySelector('p').innerHTML = c5.comprarClicker();
					document.querySelectorAll('.clicker-box')[4].querySelector('h3').innerHTML = c5.gerandoPorSegundo().toLocaleString('pt-BR');
					break;
				case 'c6':
					document.querySelectorAll('.clicker-box')[5].querySelector('p').innerHTML = c6.comprarClicker();
					document.querySelectorAll('.clicker-box')[5].querySelector('h3').innerHTML = c6.gerandoPorSegundo().toLocaleString('pt-BR');
					break;

			}
		}

		for(let i = 0;i < clickers.length;i++){
		clickers[i].addEventListener('click',(e)=>{
			handleClick(e.target.getAttribute('hero'));
		})
	}

		setInterval(function(){
			if(moedas < 5000000){
			moedas += c1.gerarMoedas()+c2.gerarMoedas()+c3.gerarMoedas()+c4.gerarMoedas()+c5.gerarMoedas()+c6.gerarMoedas();
			}
			if(moedas > 5000000){
				moedas = 5000000;
			}
			document.getElementById('contador-moedas').innerHTML = moedas.toLocaleString('pt-BR');
		},1000)






