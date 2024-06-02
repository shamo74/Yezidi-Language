<script>
        function translateText() {
            const translations = {
                "مرحبا": "hello",
                "شلونك": "يا هلا",
                "جدكي": "بطال",

                    "كيفك":"بخير",
                "كيفك": "how are you"
            };
            
            let inputText = document.getElementById("inputField").value.trim();
            let outputText = translations[inputText] || "ترجمة";
            document.getElementById("outputField").value = outputText;
        }
    </script>
