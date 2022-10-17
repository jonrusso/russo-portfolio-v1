// 1 STEP - CONVERT THE HTML ELEMENTS TO JS

    const tabs = document.querySelectorAll(".tab");

// IF WE WANT TO USE NOW THIS METHOD TO TEST, NOW JUST NEED
// TO WRITE CONSOLE.LOG(TABS);

//  2 STEP - IDENTIFY THE CLICK ON THE TAB 

    tabs.forEach(tab => {

        tab.addEventListener("click", function() {

            if(tab.classList.contains("selected")) {
                return;
            }
            
            selectingTab(tab)

            showingInfoTab(tab)

        });

       
    });

    function selectingTab(tab) {

        // 3 STEP - WHEN THE USER CLICK UP ON THE TAB, 
            // DESELECT THE SELECTED TAB
            const tabSelected = document.querySelector(".tab.selected");
            // TEST ON CONSOLE > console.log(tabSelected.classList);
            tabSelected.classList.remove("selected");

            // 4 STEP - MARK ON THE TAB THAT WAS CLICKED AS A SELECTED
            tab.classList.add("selected");
    }

    function showingInfoTab(tab) {

         // 5 STEP - HIDING THE PREVIOUS CONTENT
         const InformationSelected = document.querySelector(".Information.selected");
         console.log(InformationSelected);
         InformationSelected.classList.remove("selected");

         // 6 STEP - SHOW UP THE CONTENT THAT ARE SELECTED.

         const idElementInfoTab = `information-${tab.id}`
         
         const infoToBeShown = document.getElementById(idElementInfoTab)

          infoToBeShown.classList.add("selected")
    }
        

