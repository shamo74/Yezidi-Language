// تحديد الكلمات المترجمة
const dictionary = {
    "كلمة1": "ترجمة1",
    "كلمة2": "ترجمة2",
    // يمكنك إضافة المزيد من الكلمات وترجماتها هنا
};

// التحقق من تغيير النص في حقل الإدخال
document.getElementById('inputField').addEventListener('input', function() {
    const inputText = this.value.trim();
    const outputField = document.getElementById('outputField');
    
    if (inputText !== '') {
        // التحقق مما إذا كانت الكلمة موجودة في القاموس
        if (dictionary.hasOwnProperty(inputText)) {
            outputField.textContent = dictionary[inputText];
        } else {
            outputField.textContent = 'لا توجد ترجمة';
        }
    } else {
        outputField.textContent = '';
    }
});