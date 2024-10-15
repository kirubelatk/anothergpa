class Stakeholder { // Corrected case for consistency
    constructor(name, description, photo) {
      this.name = name;
      this.description = description;
      this.photo = photo;
    }
  }

  const stakeholders = []; // Array of Stakeholder objects
  
  function addStakeholder(name, description, photo) {
    const newStakeholder = new Stakeholder(name, description, photo);
    stakeholders.push(newStakeholder);
  }

  class Baddebts {
    constructor(amount, person, deadline) {
      this.amount = amount;
      this.person = person;
      this.deadline = deadline;
    }
  }
  
  const baddebts = [];

  function addBaddebts(amount, person, deadline) {
    const newBaddebts = new Baddebts(amount, person, deadline);
    
    baddebts.push(newBaddebts);
  }
  
  class gooddebt {
    constructor(amount, person, deadline) {
      this.amount = amount;
      this.person = person;
      this.deadline = deadline;
    }
  }

  const gooddebts = [];

  function addGooddebts(amount, person, deadline) {
    const newGooddebts = new gooddebt(amount, person, deadline);
    gooddebts.push(newGooddebts);
  }
  

  const main = document.querySelector('main');
  /*
  function displayStakeholders() {
    main.innerHTML = '';
     
     const boxbox = document.createElement('div')
     boxbox.style.display ='flex';
     boxbox.style.flexDirection= 'column';
     boxbox.style.border = '1px solid #000';
     boxbox.style.margin = '70px'
     boxbox.style.padding = '30px'



     const titbut = document.createElement('div');
     titbut.style.display = 'flex';
     titbut.style.flexDirection = 'row';
     titbut.style.justifyContent = 'space-between'; 
     titbut.style.padding = '20px 50px 20px 50px'

     const title = document.createElement('h1');
     title.innerHTML = 'People';

     const addbut = document.createElement('button');
     addbut.innerHTML = 'Add';
     addbut.style.width = '100px';
     addbut.style.height = '50px';
     addbut.style.border = '1px solid #000';
     addbut.style.backgroundColor = '#012030';
     addbut.style.color = 'white';
     addbut.style.cursor = 'pointer';
     addbut.style.borderRadius = '10px';
     addbut.style.fontSize = '20px';
     addbut.style.textAlign = 'center';

     addbut.addEventListener('click', () => {
      const addpeople = document.querySelector('.people-dialog')
      addpeople.showModal();
     });

     titbut.appendChild(title);
        titbut.appendChild(addbut);
        boxbox.appendChild(titbut);

    stakeholders.forEach((stakeholder) => {
       
     
        const box = document.createElement('div');
        box.style.width = '800px';
        box.style.height = '80px';
        box.style.border = '1px solid #000';
        box.style.marginTop = '10px'
        box.style.marginLeft = '30px'
        box.style.padding = '30px'
        box.style.display = 'flex';
        box.style.flexDirection = 'row';
        box.style.gap = '30px'

      const ph = document.createElement('div');
        ph.innerHTML = `<img src="${stakeholder.photo}" alt="${stakeholder.name}'s " class="photos">`

        const snamedes = document.createElement('div');
        snamedes.style.display = 'flex'
        snamedes.style.flexDirection = 'column'
        justifyContent = 'space-around'
      const sname = document.createElement('h1');
        sname.innerHTML = stakeholder.name;
        sname.style.border = '1px solid #000';
      const sdes = document.createElement('p');
        sdes.innerHTML = stakeholder.description;
        sdes.style.border = '1px solid #000';
        sdes.style.marginTop = '-5px'

        
        snamedes.appendChild(sname);
        snamedes.appendChild(sdes);
        box.appendChild(ph);
        box.appendChild(snamedes);
        boxbox.appendChild(box);
        main.appendChild(boxbox);
    });
    
  }
  */
  function displayStakeholders() {
    main.innerHTML = '';
  
    const boxbox = document.createElement('div');
    boxbox.className = 'box-box';
  
    const titbut = document.createElement('div');
    titbut.className = 'title-button';
  
    const title = document.createElement('h1');
    title.innerHTML = 'People';
  
    const addbut = document.createElement('button');
    addbut.className = 'add-button';
    addbut.innerHTML = 'Add';
  
    addbut.addEventListener('click', () => {
      const addpeople = document.querySelector('.people-dialog');
      addpeople.showModal();
    });
  
    titbut.appendChild(title);
    titbut.appendChild(addbut);
    boxbox.appendChild(titbut);
  
    stakeholders.forEach((stakeholder) => {
      const box = document.createElement('div');
      box.className = 'stakeholder-box';
  
      box.addEventListener('click', () => {
        displayStakeholderDebts(stakeholder);
      });
  
      const ph = document.createElement('div');
      ph.innerHTML = `<img src="${stakeholder.photo}" alt="${stakeholder.name}'s " class="photos">`;
  
      const snamedes = document.createElement('div');
      snamedes.className = 'name-description';
  
      const sname = document.createElement('h1');
      sname.className = 'stakeholder-name';
      sname.innerHTML = stakeholder.name;
  
      const sdes = document.createElement('p');
      sdes.className = 'stakeholder-description';
      sdes.innerHTML = stakeholder.description;
  
      snamedes.appendChild(sname);
      snamedes.appendChild(sdes);
      box.appendChild(ph);
      box.appendChild(snamedes);
      boxbox.appendChild(box);
    });
  
    main.appendChild(boxbox);
  }
  const stakeholderCard = document.querySelector('.stkjs'); // Corrected selector
  stakeholderCard.addEventListener('click', displayStakeholders);
  
  addStakeholder('Abebe Bedaso', 'Project Manager', 'pp2.png');
  addStakeholder('Mohamed Ahemed', 'Software Engineer', 'pp2.png');
  addStakeholder('Tesfaye Chala', 'Software Engineer', 'pp2.png');
  
 

  const submitbut = document.querySelector('.addbutsubmit');
  submitbut.addEventListener('click', () => {
    const name = document.querySelector('#name').value;
    const description = document.querySelector('#description').value;
    const photo = document.querySelector('#image').value;
    addStakeholder(name, description, photo);
    const addpeople = document.querySelector('.people-dialog')
    addpeople.close();
    
    displayStakeholders();
  }) 

  const cancelbut = document.querySelector('.Canceladdbut');
  cancelbut.addEventListener('click', () => {
    const addpeople = document.querySelector('.people-dialog')
    addpeople.close();
  })

  
  function displayBaddebts() {
    main.innerHTML = '';

      const debtsBox = document.createElement('div');
      debtsBox.className = 'debts-box';
      debtsBox.style.display = 'flex';
      debtsBox.style.flexDirection = 'column';
      debtsBox.style.border = '1px solid #000';
      debtsBox.style.margin = '70px'
      debtsBox.style.padding = '30px'
      
      
      const debtsTitleBar = document.createElement('div');
      debtsTitleBar.className = 'debts-title-bar';
      debtsTitleBar.style.display = 'flex';
      debtsTitleBar.style.flexDirection = 'row';
      debtsTitleBar.style.justifyContent = 'space-between';
      debtsTitleBar.style.padding = '20px 50px 20px 50px'
    
      const debtsTitle = document.createElement('h1');
      debtsTitle.textContent = 'Debts';
    
      const addDebtsButton = document.createElement('button');
      addDebtsButton.className = 'add-debts-button';
      addDebtsButton.textContent = 'Add';
      addDebtsButton.style.cursor = 'pointer';
      addDebtsButton.style.width = '100px';
      addDebtsButton.style.height = '50px';
      addDebtsButton.style.backgroundColor = '#012030';
      addDebtsButton.style.color = 'white';
      addDebtsButton.style.borderRadius = '10px';
      addDebtsButton.style.fontSize = '20px';
      addDebtsButton.style.textAlign = 'center';

      addDebtsButton.addEventListener('click', () => {
        const addpeople = document.querySelector('.baddebts-dialog')
        addpeople.showModal();
        populatePersonDropdown();

      })
    
      

    
      const debtslist = document.createElement('div');
      debtslist.className = 'debts-table';
      debtslist.style.border = '1px solid #000';
    
      const headerRow = document.createElement('div');
      headerRow.style.display = 'flex';
      headerRow.style.flexDirection = 'row';
      headerRow.style.justifyContent = 'space-between';
      headerRow.style.padding = '10px 50px 10px 50px'
      headerRow.style.backgroundColor = '#012030';
      headerRow.style.color = 'white';
      headerRow.style.fontWeight = 'bold';
      headerRow.style.fontSize = '20px';
    
      const amountHeader = document.createElement('p');
      amountHeader.textContent = 'Amount';
      headerRow.appendChild(amountHeader);
    
      const deadlineHeader = document.createElement('p');
      deadlineHeader.textContent = 'Deadline';
      headerRow.appendChild(deadlineHeader);
    
      const personHeader = document.createElement('p');
      personHeader.textContent = 'Person';
      headerRow.appendChild(personHeader);

      const actionsHeader = document.createElement('p');
      actionsHeader.textContent = 'Actions';
      headerRow.appendChild(actionsHeader);
    
      debtslist.appendChild(headerRow);
    
      
      baddebts.forEach((baddebt) => {
        const dataRow = document.createElement('div');
        dataRow.style.display = 'flex';
        dataRow.style.flexDirection = 'row';
        dataRow.style.justifyContent = 'space-between';
        dataRow.style.padding = '10px 50px 10px 50px'
        dataRow.style.border = '1px solid #012030';
        dataRow.style.fontSize = '15px';
    
        const amountCell = document.createElement('p');
        amountCell.textContent = baddebt.amount;
        dataRow.appendChild(amountCell);
    
        const deadlineCell = document.createElement('p');
        deadlineCell.textContent = baddebt.deadline;
        dataRow.appendChild(deadlineCell);
    
        const personCell = document.createElement('p');
        personCell.textContent = baddebt.person;
        dataRow.appendChild(personCell);

        const buttonsCell = document.createElement('div');
        buttonsCell.style.display = 'flex';
        buttonsCell.style.flexDirection = 'row';
        buttonsCell.style.gap = '10px';
        
        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.style.width = '60px';
        editButton.style.height = '25px';
        editButton.style.backgroundColor = '#012030';
        editButton.style.color = 'white';
        editButton.style.borderRadius = '2px';
        editButton.style.fontSize = '14px';
        editButton.style.textAlign = 'center';
        editButton.style.cursor = 'pointer';

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.style.width = '60px';
        deleteButton.style.height = '25px';
        deleteButton.style.backgroundColor = '#012030';
        deleteButton.style.color = 'white';
        deleteButton.style.borderRadius = '2px';
        deleteButton.style.fontSize = '14px';
        deleteButton.style.textAlign = 'center';
        deleteButton.style.cursor = 'pointer';

        buttonsCell.appendChild(editButton);
        buttonsCell.appendChild(deleteButton);  

        dataRow.appendChild(buttonsCell);
        debtslist.appendChild(dataRow);
      });

      
    
      debtsTitleBar.appendChild(debtsTitle);
      debtsTitleBar.appendChild(addDebtsButton);
      debtsBox.appendChild(debtsTitleBar);
      debtsBox.appendChild(debtslist);
      main.appendChild(debtsBox);
    }
  
    addBaddebts(2000, 'Abebe Bedaso', '10/10/2022');
    addBaddebts(4000, 'Mohamed Ahemed', '11/11/2022');
    addBaddebts(1000, 'Tesfaye Chala', '12/12/2022');

  baddebt = document.querySelector('.incjs');
  baddebt.addEventListener('click', () => {
     displayBaddebts();
     
  })

  const adddebtbuttons = document.querySelector('.add-debt-submit');
  
    adddebtbuttons.addEventListener('click', () => {
      const amount = document.getElementById('amount').value;
      const deadline = document.getElementById('deadline').value;
      const person = document.getElementById('person').value;
      addBaddebts(amount, person, deadline);
      displayBaddebts();
      const addpeople = document.querySelector('.baddebts-dialog')
      addpeople.close();
    });

    const canceldebtbuttons = document.querySelector('.cancel-add-debt');
    canceldebtbuttons.addEventListener('click', () => {
      const addpeople = document.querySelector('.baddebts-dialog')
      addpeople.close();
    })

    function populatePersonDropdown() {
      const personSelect = document.getElementById('person');
      personSelect.innerHTML = ''; // Clear existing options
      stakeholders.forEach((stakeholder) => {
        const option = document.createElement('option');
        option.value = stakeholder.name;
        option.textContent = stakeholder.name;
        personSelect.appendChild(option);
      });
    }

    function populatePersonDropdown2() {
      const personSelect = document.getElementById('person2');
      personSelect.innerHTML = ''; // Clear existing options
      stakeholders.forEach((stakeholder) => {
        const option = document.createElement('option');
        option.value = stakeholder.name;
        option.textContent = stakeholder.name;
        personSelect.appendChild(option);
      });
    }
    function displayGooddebts() {
      main.innerHTML = '';
    
      const debtsBox = document.createElement('div');
      debtsBox.className = 'debts-box';
      debtsBox.style.display = 'flex';
      debtsBox.style.flexDirection = 'column';
      debtsBox.style.border = '1px solid #000';
      debtsBox.style.margin = '70px';
      debtsBox.style.padding = '30px';
    
      const debtsTitleBar = document.createElement('div');
      debtsTitleBar.className = 'debts-title-bar';
      debtsTitleBar.style.display = 'flex';
      debtsTitleBar.style.flexDirection = 'row';
      debtsTitleBar.style.justifyContent = 'space-between';
      debtsTitleBar.style.padding = '20px 50px 20px 50px';
    
      const debtsTitle = document.createElement('h1');
      debtsTitle.textContent = 'Good Debts';
    
      const addDebtsButton = document.createElement('button');
      addDebtsButton.className = 'add-debts-button';
      addDebtsButton.textContent = 'Add';
      addDebtsButton.style.cursor = 'pointer';
      addDebtsButton.style.width = '100px';
      addDebtsButton.style.height = '50px';
      addDebtsButton.style.backgroundColor = '#012030';
      addDebtsButton.style.color = 'white';
      addDebtsButton.style.borderRadius = '10px';
      addDebtsButton.style.fontSize = '20px';
      addDebtsButton.style.textAlign = 'center';
    
      addDebtsButton.addEventListener('click', () => {
        const addpeople = document.querySelector('.gooddebts-dialog')
        populatePersonDropdown2();
        addpeople.showModal();
        
      })
    
      debtsTitleBar.appendChild(debtsTitle);
      debtsTitleBar.appendChild(addDebtsButton);
      debtsBox.appendChild(debtsTitleBar);
    
      const debtslist = document.createElement('div');
      debtslist.className = 'debts-table';
      debtslist.style.border = '1px solid #000';
    
      const headerRow = document.createElement('div');
      headerRow.style.display = 'flex';
      headerRow.style.flexDirection = 'row';
      headerRow.style.justifyContent = 'space-between';
      headerRow.style.padding = '10px 50px 10px 50px';
      headerRow.style.backgroundColor = '#012030';
      headerRow.style.color = 'white';
      headerRow.style.fontWeight = 'bold';
      headerRow.style.fontSize = '20px';
    
      const amountHeader = document.createElement('p');
      amountHeader.textContent = 'Amount';
      headerRow.appendChild(amountHeader);
    
      const deadlineHeader = document.createElement('p');
      deadlineHeader.textContent = 'Deadline';
      headerRow.appendChild(deadlineHeader);
    
      const personHeader = document.createElement('p');
      personHeader.textContent = 'Person';
      headerRow.appendChild(personHeader);
    
      const actionsHeader = document.createElement('p');
      actionsHeader.textContent = 'Actions';
      headerRow.appendChild(actionsHeader);
    
      debtslist.appendChild(headerRow);
    
      gooddebts.forEach((gooddebt) => {
        const dataRow = document.createElement('div');
        dataRow.style.display = 'flex';
        dataRow.style.flexDirection = 'row';
        dataRow.style.justifyContent = 'space-between';
        dataRow.style.padding = '10px 50px 10px 50px';
        dataRow.style.border = '1px solid #012030';
        dataRow.style.fontSize = '15px';
    
        const amountCell = document.createElement('p');
        amountCell.textContent = gooddebt.amount;
        dataRow.appendChild(amountCell);
    
        const deadlineCell = document.createElement('p');
        deadlineCell.textContent = gooddebt.deadline;
        dataRow.appendChild(deadlineCell);
    
        const personCell = document.createElement('p');
        personCell.textContent = gooddebt.person;
        dataRow.appendChild(personCell);
    
        const buttonsCell = document.createElement('div');
        buttonsCell.style.display = 'flex';
        buttonsCell.style.flexDirection = 'row';
        buttonsCell.style.gap = '10px';
    
        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.style.width = '60px';
        editButton.style.height = '25px';
        editButton.style.backgroundColor = '#012030';
        editButton.style.color = 'white';
        editButton.style.borderRadius = '2px';
        editButton.style.fontSize = '14px';
        editButton.style.textAlign = 'center';
        editButton.style.cursor = 'pointer';
    
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.style.width = '60px';
        deleteButton.style.height = '25px';
        deleteButton.style.backgroundColor = '#012030';
        deleteButton.style.color = 'white';
        deleteButton.style.borderRadius = '2px';
        deleteButton.style.fontSize = '14px';
        deleteButton.style.textAlign = 'center';
        deleteButton.style.cursor = 'pointer';
    
        buttonsCell.appendChild(editButton);
        buttonsCell.appendChild(deleteButton);
    
        dataRow.appendChild(buttonsCell);
        debtslist.appendChild(dataRow);
      });
    
      debtsTitleBar.appendChild(debtsTitle);
      debtsTitleBar.appendChild(addDebtsButton);
      debtsBox.appendChild(debtsTitleBar);
      debtsBox.appendChild(debtslist);
      main.appendChild(debtsBox);
    }
    
    addGooddebts(2000, 'Abebe Bedaso', '10/10/2022');
    addGooddebts(1000, 'Mohamed Ahemed', '11/11/2022');
    addGooddebts(1000, 'Tesfaye Chala', '12/12/2022');
    addGooddebts(1000, 'Abdulrahman Fati', '13/13/2022');
    
    const goodebt = document.querySelector('.outjs');
    goodebt.addEventListener('click', () => {
      displayGooddebts();
    });

    const addgooddebtbuttons = document.querySelector('.add-good-debt-submit');
  
    addgooddebtbuttons.addEventListener('click', () => {
      const amount = document.getElementById('good-debt-amount').value;
      const deadline = document.getElementById('good-debt-deadline').value;
      const person = document.getElementById('person2').value;
      addGooddebts(amount, person, deadline);
      displayGooddebts();
      const addpeople = document.querySelector('.gooddebts-dialog')
      addpeople.close();
    });

    const cancelgooddebtbuttons = document.querySelector('.cancel-add-good-debt');
    cancelgooddebtbuttons.addEventListener('click', () => {
      const addpeople = document.querySelector('.gooddebts-dialog')
      addpeople.close();
    })

    function populatethebadnumbers() {
      const inc = document.querySelector('.inc');
      inc.innerHTML = '';
    
      let totalbadDebt = 0;
    
      baddebts.forEach((baddebt) => {
        totalbadDebt += baddebt.amount;
      });
    
      inc.innerHTML = totalbadDebt + ' ' +'Br';
    }
    function populatethegoodnumbers() {
      const outc = document.querySelector('.outc');
      outc.innerHTML = '';
    
      let totalGoodDebt = 0;
    
      gooddebts.forEach((gooddebt) => {
        totalGoodDebt += gooddebt.amount;
      });
    
      outc.innerHTML = totalGoodDebt + ' ' +'Br';
    }
    populatethebadnumbers();
    populatethegoodnumbers();

      function displayAllRecords() {
        main.innerHTML = '';
      
        const recordsBox = document.createElement('div');
        recordsBox.className = 'records-box';
        recordsBox.style.display = 'flex';
        recordsBox.style.flexDirection = 'column';
        recordsBox.style.border = '1px solid #000';
        recordsBox.style.margin = '70px';
        recordsBox.style.padding = '30px';
      
        const recordsTitleBar = document.createElement('div');
        recordsTitleBar.className = 'records-title-bar';
        recordsTitleBar.style.display = 'flex';
        recordsTitleBar.style.flexDirection = 'row';
        recordsTitleBar.style.justifyContent = 'space-between';
        recordsTitleBar.style.padding = '20px 50px 20px 50px';
      
        const recordsTitle = document.createElement('h1');
        recordsTitle.textContent = 'All Records';
        recordsTitleBar.appendChild(recordsTitle);
        recordsBox.appendChild(recordsTitleBar);
      
        const createHeaderRow = () => {
          const headerRow = document.createElement('div');
          headerRow.style.display = 'flex';
          headerRow.style.flexDirection = 'row';
          headerRow.style.justifyContent = 'space-between';
          headerRow.style.padding = '10px 50px 10px 50px';
          headerRow.style.backgroundColor = '#012030';
          headerRow.style.color = 'white';
          headerRow.style.fontWeight = 'bold';
          headerRow.style.fontSize = '20px';
      
          const amountHeader = document.createElement('p');
          amountHeader.textContent = 'Amount';
          headerRow.appendChild(amountHeader);
      
          const deadlineHeader = document.createElement('p');
          deadlineHeader.textContent = 'Deadline';
          headerRow.appendChild(deadlineHeader);
      
          const personHeader = document.createElement('p');
          personHeader.textContent = 'Person';
          headerRow.appendChild(personHeader);
      
          return headerRow;
        };
      
        const addDebtRecords = (debts, title) => {
          const sectionTitle = document.createElement('h2');
          sectionTitle.textContent = title;
          sectionTitle.style.marginTop = '20px';
          recordsBox.appendChild(sectionTitle);
      
          const debtsList = document.createElement('div');
          debtsList.className = 'debts-table';
          debtsList.style.border = '1px solid #000';
          debtsList.appendChild(createHeaderRow());
      
          debts.forEach((debt) => {
            const dataRow = document.createElement('div');
            dataRow.style.display = 'flex';
            dataRow.style.flexDirection = 'row';
            dataRow.style.justifyContent = 'space-between';
            dataRow.style.padding = '10px 50px 10px 50px';
            dataRow.style.border = '1px solid #012030';
            dataRow.style.fontSize = '15px';
      
            const amountCell = document.createElement('p');
            amountCell.textContent = debt.amount;
            dataRow.appendChild(amountCell);
      
            const deadlineCell = document.createElement('p');
            deadlineCell.textContent = debt.deadline;
            dataRow.appendChild(deadlineCell);
      
            const personCell = document.createElement('p');
            personCell.textContent = debt.person;
            dataRow.appendChild(personCell);
      
            debtsList.appendChild(dataRow);
          });
      
          recordsBox.appendChild(debtsList);
        };
      
        addDebtRecords(baddebts, 'Bad Debts');
        addDebtRecords(gooddebts, 'Good Debts');
        
        main.appendChild(recordsBox);
      }
      
      const allRecordsButton = document.querySelector('.ovcjs');
      allRecordsButton.addEventListener('click', displayAllRecords);

      function populateOverallDebt() {
        const overallDebtContainer = document.querySelector('.ovc');
        overallDebtContainer.innerHTML = '';
      
        let totalBadDebt = 0;
        let totalGoodDebt = 0;
      
        baddebts.forEach((baddebt) => {
          totalBadDebt += baddebt.amount;
        });
      
        gooddebts.forEach((gooddebt) => {
          totalGoodDebt += gooddebt.amount;
        });
      
        const overallDebt = totalGoodDebt - totalBadDebt;
        overallDebtContainer.innerHTML = overallDebt + ' Br';
      }
      
      // Example usage
      populateOverallDebt();

      const sideoutgoing = document.querySelector('.sideoutgoing');
      sideoutgoing.addEventListener('click', displayBaddebts);

      const sideincoming = document.querySelector('.sideincoming');
      sideincoming.addEventListener('click', displayGooddebts);

      const sidealldebts = document.querySelector('.sidealldebts');
      sidealldebts.addEventListener('click', displayAllRecords);

      const sidestakeholders = document.querySelector('.sidestakeholders')
      sidestakeholders.addEventListener('click', displayStakeholders);

      function displayStakeholderDebts(stakeholder) {
        main.innerHTML = '';
      
        const debtsBox = document.createElement('div');
        debtsBox.style.border = '1px solid #000';
        debtsBox.style.margin = '70px';
        debtsBox.style.padding = '30px';
      
        const title = document.createElement('h2');
        title.textContent = `${stakeholder.name}'s Debts`;
        debtsBox.appendChild(title);
      
        const debtsList = document.createElement('div');
        debtsList.style.border = '1px solid #000';
      
        const headerRow = document.createElement('div');
        headerRow.style.display = 'flex';
        headerRow.style.justifyContent = 'space-between';
        headerRow.style.padding = '10px 50px 10px 50px';
        headerRow.style.backgroundColor = '#012030';
        headerRow.style.color = 'white';
        headerRow.style.fontWeight = 'bold';
        headerRow.style.fontSize = '20px';
      
        const amountHeader = document.createElement('p');
        amountHeader.textContent = 'Amount';
        headerRow.appendChild(amountHeader);
      
        const deadlineHeader = document.createElement('p');
        deadlineHeader.textContent = 'Deadline';
        headerRow.appendChild(deadlineHeader);
      
        const typeHeader = document.createElement('p');
        typeHeader.textContent = 'Type';
        headerRow.appendChild(typeHeader);
      
        debtsList.appendChild(headerRow);
      
        let totalDebt = 0;
      
        baddebts.forEach((debt) => {
          if (debt.person === stakeholder.name) {
            const dataRow = document.createElement('div');
            dataRow.style.display = 'flex';
            dataRow.style.justifyContent = 'space-between';
            dataRow.style.padding = '10px 50px 10px 50px';
            dataRow.style.border = '1px solid #012030';
            dataRow.style.fontSize = '15px';
      
            const amountCell = document.createElement('p');
            amountCell.textContent = `-${debt.amount}`;
            dataRow.appendChild(amountCell);
      
            const deadlineCell = document.createElement('p');
            deadlineCell.textContent = debt.deadline;
            dataRow.appendChild(deadlineCell);
      
            const typeCell = document.createElement('p');
            typeCell.textContent = 'Bad';
            dataRow.appendChild(typeCell);
      
            debtsList.appendChild(dataRow);
            totalDebt -= Number(debt.amount);
          }
        });
      
        gooddebts.forEach((debt) => {
          if (debt.person === stakeholder.name) {
            const dataRow = document.createElement('div');
            dataRow.style.display = 'flex';
            dataRow.style.justifyContent = 'space-between';
            dataRow.style.padding = '10px 50px 10px 50px';
            dataRow.style.border = '1px solid #012030';
            dataRow.style.fontSize = '15px';
      
            const amountCell = document.createElement('p');
            amountCell.textContent = `+${debt.amount}`;
            dataRow.appendChild(amountCell);
      
            const deadlineCell = document.createElement('p');
            deadlineCell.textContent = debt.deadline;
            dataRow.appendChild(deadlineCell);
      
            const typeCell = document.createElement('p');
            typeCell.textContent = 'Good';
            dataRow.appendChild(typeCell);
      
            debtsList.appendChild(dataRow);
            totalDebt += Number(debt.amount);
          }
        });
      
        debtsBox.appendChild(debtsList);
      
        const overallDebt = document.createElement('p');
        overallDebt.style.marginTop = '20px';
        overallDebt.style.fontWeight = 'bold';
        overallDebt.textContent = `Overall Debt: ${totalDebt} Br`;
        debtsBox.appendChild(overallDebt);
      
        main.appendChild(debtsBox);
      }

      document.addEventListener("DOMContentLoaded", function() {
        const hamburger = document.getElementById("hamburger");
        const sidebar = document.getElementById("sidebar");
    
        hamburger.addEventListener("click", function() {
            if (sidebar.style.display === "block") {
                sidebar.style.display = "none";
            } else {
                sidebar.style.display = "block";
            }
        });
    });