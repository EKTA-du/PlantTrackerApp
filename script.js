<script>
    function showHome() {
        hideAllSections();
        document.getElementById("home").style.display = "block";
    }

    function showAboutUs() {
        hideAllSections();
        document.getElementById("aboutUs").style.display = "block";
    }

    function showContactUs() {
        hideAllSections();
        document.getElementById("contactUs").style.display = "block";
    }

    function showPlantList() {
        hideAllSections();
        document.getElementById("plantList").style.display = "block";
    }

    function showWateringForm() {
        hideAllSections();
        document.getElementById("wateringForm").style.display = "block";
    }

    function showGrowthTracker() {
        hideAllSections();
        document.getElementById("growthTracker").style.display = "block";
    }

    function hideAllSections() {
        var sections = document.querySelectorAll("section");
        sections.forEach(section => {
            section.style.display = "none";
        });
    }

    // Initial view: Home
    showHome();
</script>