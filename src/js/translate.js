export function int_to_english(num) {
    if (num < 0) {
        return "Negative " + int_to_english(-num);
    }
    if (num < 20) {
        return ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"][num];
    }
    if (num < 100) {
        return [null, null, "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"][Math.floor(num / 10)] + (num % 10 === 0 ? "" : ` ${int_to_english(num % 10)}`);
    }
    if (num < 1000) {
        return `${int_to_english(Math.floor(num / 100))} Hundred` + (num % 100 === 0 ? "" : ` ${int_to_english(num % 100)}`);
    }
    if (num < 1000000) {
        return `${int_to_english(Math.floor(num / 1000))} Thousand` + (num % 1000 === 0 ? "" : ` ${int_to_english(num % 1000)}`);
    }
    if (num < 1000000000) {
        return `${int_to_english(Math.floor(num / 1000000))} Million` + (num % 1000000 === 0 ? "" : ` ${int_to_english(num % 1000000)}`);
    }
    return `${int_to_english(Math.floor(num / 1000000000))} Billion` + (num % 1000000000 === 0 ? "" : ` ${int_to_english(num % 1000000000)}`);
}

export function int_to_pronunciation(num) {
    if (num < 0) {
        return "Negative " + int_to_pronunciation(-num);
    }
    if (num < 20) {
        return ["ज़ीरो", "वन", "टू", "थ्री", "फोर", "फाइव", "सिक्स", "सेवन", "एट", "नाइन", "टेन", "इलेवन", "ट्वेल्व", "थर्टीन", "फोर्टीन", "फिफ्टीन", "सिक्स्टीन", "सेवेंटीन", "एटीन", "नाइन्टीन"][num];
    }
    if (num < 100) {
        return [null, null, "ट्वेंटी", "थर्टी", "फोर्टी", "फिफ्टी", "सिक्स्टी", "सेवेंटी", "एटी", "नाइंटी"][Math.floor(num / 10)] + (num % 10 === 0 ? "" : ` ${int_to_pronunciation(num % 10)}`);
    }
    if (num < 1000) {
        return `${int_to_pronunciation(Math.floor(num / 100))} हंड्रेड` + (num % 100 === 0 ? "" : ` ${int_to_pronunciation(num % 100)}`);
    }
    if (num < 1000000) {
        return `${int_to_pronunciation(Math.floor(num / 1000))} थाउज़ंड` + (num % 1000 === 0 ? "" : ` ${int_to_pronunciation(num % 1000)}`);
    }
    if (num < 1000000000) {
        return `${int_to_pronunciation(Math.floor(num / 1000000))} मिलियन` + (num % 1000000 === 0 ? "" : ` ${int_to_pronunciation(num % 1000000)}`);
    }
    return `${int_to_pronunciation(Math.floor(num / 1000000000))} बिलियन` + (num % 1000000000 === 0 ? "" : ` ${int_to_pronunciation(num % 1000000000)}`);
}

export function int_to_hindi(num) {
    if (num < 0) {
        return "Negative " + int_to_hindi(-num);
    }
    if (num < 100) {
        return ['शून्य', 'एक', 'दो', 'तीन', 'चार', 'पांच', 'छः', 'सात', 'आठ', 'नौ', 'दस', 'ग्यारह', 'बारह', 'तेरह', 'चौदह', 'पंद्रह', 'सोलह', 'सत्रह', 'अठारह', 'उन्नीस', 'बीस', 'इक्कीस', 'बाईस', 'तेइस', 'चौबीस', 'पच्चीस', 'छब्बीस', 'सत्ताईस', 'अट्ठाईस', 'उन्तीस', 'तीस', 'इकतीस', 'बत्तीस', 'तैंतीस', 'चौंतीस', 'पैंतीस', 'छत्तीस', 'सैंतीस', 'अड़तीस', 'उनतालीस', 'चालीस', 'इकतालीस', 'बयालीस', 'तैंतालीस', 'चौंतालीस', 'पैंतालीस', 'छियालीस', 'सैंतालीस', 'अड़तालीस', 'उनचास', 'पचास', 'इक्यावन', 'बावन', 'तिरेपन', 'चौवन', 'पचपन', 'छप्पन', 'सतावन', 'अट्ठावन', 'उनसठ', 'साठ', 'इकसठ', 'बासठ', 'तिरसठ', 'चौंसठ', 'पैंसठ', 'छियासठ', 'सड़सठ', 'अड़सठ', 'उनहत्तर', 'सत्तर', 'इकहत्तर', 'बहत्तर', 'तिहत्तर', 'चौहत्तर', 'पचहत्तर', 'छिहत्तर', 'सतहत्तर', 'अठहत्तर', 'उनासी', 'अस्सी', 'इक्यासी', 'बयासी', 'तिरासी', 'चौरासी', 'पचासी', 'छियासी', 'सतासी', 'अट्ठासी', 'नवासी', 'नब्बे', 'इक्यानबे', 'बानवे', 'तिरानवे', 'चौरानवे', 'पचानवे', 'छियानवे', 'सत्तानवे', 'अट्ठानवे', 'निन्यानवे'][num];
    }
    if (num < 1000) {
        return `${int_to_hindi(Math.floor(num / 100))} सौ` + (num % 100 === 0 ? "" : ` ${int_to_hindi(num % 100)}`);
    }
    if (num < 100000) {
        return `${int_to_hindi(Math.floor(num / 1000))} हज़ार` + (num % 1000 === 0 ? "" : ` ${int_to_hindi(num % 1000)}`);
    }
    if (num < 10000000) {
        return `${int_to_hindi(Math.floor(num / 100000))} लाख` + (num % 100000 === 0 ? "" : ` ${int_to_hindi(num % 100000)}`);
    }
    return `${int_to_hindi(Math.floor(num / 10000000))} करोड़` + (num % 10000000 === 0 ? "" : ` ${int_to_hindi(num % 10000000)}`);
}
