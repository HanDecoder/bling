import { Injectable } from '@angular/core';
import { strict } from 'assert';

@Injectable({
    providedIn: "root"
})
export class ConverterService {
    num: string;
    converted_number: string;
    base: number;
    converted_base: number;

    inputValid = false;

    onProcess(source: string, result: string, validInput: boolean) {
        if(source == "binary" && result == "decimal") {
            this.inputValid = validInput;
            this.converted_base = 10;
            this.base = 2;
            this.converted_number = this.binaryToDecimal(this.num);
        }
        if(source == "binary" && result == "hex") {
            this.inputValid = validInput;
            this.converted_base = 16;
            this.base = 2;
            this.converted_number = this.binaryToHex(this.num);
        }
        if(source == "binary" && result == "octal") {
            this.inputValid = validInput;
            this.converted_base = 8;
            this.base = 2;
            this.converted_number = this.binaryToOctal(this.num);
        }
        if(source == "octal" && result == "binary") {
            this.inputValid = validInput;
            this.converted_base = 2;
            this.base = 8;
            this.converted_number = this.octalToBinary(this.num);
        }
        if(source == "octal" && result == "decimal") {
            this.inputValid = validInput;
            this.converted_base = 10;
            this.base = 8;
            this.converted_number = this.octalToDecimal(this.num);
        }
        if(source == "octal" && result == "hex") {
            this.inputValid = validInput;
            this.converted_base = 16;
            this.base = 8;
            this.converted_number = this.octalToHex(this.num);
        }
        if(source == "decimal" && result == "binary") {
            this.inputValid = validInput;
            this.converted_base = 2;
            this.base = 10;
            this.converted_number = this.decimalToBinary(this.num);
        }
        if(source == "decimal" && result == "octal") {
            this.inputValid = validInput;
            this.converted_base = 8;
            this.base = 10;
            this.converted_number = this.decimalToOctal(this.num);
        }
        if(source == "decimal" && result == "hex") {
            this.inputValid = validInput;
            this.converted_base = 16;
            this.base = 10;
            this.converted_number = this.decimalToHex(this.num);
        }
        if(source == "hex" && result == "decimal") {
            this.inputValid = validInput;
            this.converted_base = 10;
            this.base = 16;
            this.converted_number = this.hexToDecimal(this.num);
        }
        if(source == "hex" && result == "binary") {
            this.inputValid = validInput;
            this.converted_base = 2;
            this.base = 16;
            this.converted_number = this.hexToBinary(this.num);
        }
        if(source == "hex" && result == "octal") {
            this.inputValid = validInput;
            this.converted_base = 8;
            this.base = 16;
            this.converted_number = this.hexToOctal(this.num);
        }
    }
    // Binary Conversions
    //Binary to Decimal
    binaryToDecimal(num: string): string {
        let temp = num.slice();

        //Runs if binary doesn't have dots
        if(temp.indexOf('.') === -1) {
            var naiveReverse = function(temp: string) {
                return temp.split('').reverse().join('');
            }
            temp = naiveReverse(temp);
            
            let decNum = 0;
            for(let i = 0; i != temp.length; ++i) {
                decNum += (Math.pow(2, i) * (+temp[i]));
            }
            return decNum.toString(); 
        }
        else {
            let num_frags = temp.split('.');

            var naiveReverse = function(temp: string) {
                return num_frags[0].split('').reverse().join('');
            }
            num_frags[0] = naiveReverse(num_frags[0]);
            
            let decNum = 0;
            let decNum2 = 0;
            for(let i = 0; i != num_frags[0].length; ++i) {
                decNum += (Math.pow(2, i) * (+(num_frags[0][i])));
                
            }
            for(let i = 1; i <= num_frags[1].length; ++i) {
                decNum2 += (Math.pow(2, -i) * (+(num_frags[1][i - 1])));
            }
            let final_num: number = (decNum + decNum2);
            return final_num.toString();
        }
    }
    binaryToOctal(num: string) {
        let octal_map = {
            "000": "0",
            "001": "1",
            "010": "2",
            "011": "3",
            "100": "4",
            "101": "5",
            "110": "6",
            "111": "7"
        };
        let dot_index = num.indexOf('.');
        let converted: string = "";
        let converted_dot_index = dot_index / 3;

        if(dot_index === -1) {
            let splitted_array = num.match(/.{1,3}/g);
            for(let i = 0; i != splitted_array.length; ++i) {
                converted += octal_map[splitted_array[i]];
            
            }
        } else {
            //remove dot
            let new_string = num.split('.').join("");
            let splitted_array = new_string.match(/.{1,3}/g);

            for(let i = 0; i != splitted_array.length; ++i) {
                if(i === converted_dot_index)
                    converted += '.';
                converted += octal_map[splitted_array[i]];
     
            }
        }
        return converted;
    }

    binaryToHex(num: string) {
        let hex_map = {
            "0000": "0",
            "0001": "1",
            "0010": "2",
            "0011": "3",
            "0100": "4",
            "0101": "5",
            "0110": "6",
            "0111": "7",
            "1000": "8",
            "1001": "9",
            "1010": "A",
            "1011": "B",
            "1100": "C",
            "1101": "D",
            "1110": "E",
            "1111": "F"
        };
        let dot_index = num.indexOf('.');
        let converted: string = "";
        let converted_dot_index = dot_index / 4;

        if(dot_index === -1) {
            let splitted_array = num.match(/.{1,4}/g);
            
            for(let i = 0; i != splitted_array.length; ++i) {
                converted += hex_map[splitted_array[i]];
            
            }
        } else {
            //remove dot
            let new_string = num.split('.').join("");
            let splitted_array = new_string.match(/.{1,4}/g);

            for(let i = 0; i != splitted_array.length; ++i) {
                if(i === converted_dot_index)
                    converted += '.';
                converted += hex_map[splitted_array[i]];
     
            }
        }
        return converted;
    }

    /// Octal Conversions
    octalToBinary(num: string) {
        let octal_map = {
            "0": "000",
            "1": "001",
            "2": "010",
            "3": "011",
            "4": "100",
            "5": "101",
            "6": "110",
            "7": "111"
        };
        let dot_index = num.indexOf('.');
        let converted: string = "";
        let converted_dot_index = dot_index * 3;

        if(dot_index === -1) {
            let splitted_array = num.match(/.{1,1}/g);
            for(let i = 0; i != splitted_array.length; ++i) {
                converted += octal_map[splitted_array[i]];
            }
        } else {
            //remove dot
            let new_string = num.split('.').join("");
            let splitted_array = new_string.match(/.{1,1}/g);

            for(let i = 0; i != splitted_array.length; ++i) {
                if(i * 3 === converted_dot_index)
                    converted += '.';
                converted += octal_map[splitted_array[i]];
            }
        }
        return converted;
    }
    // Octal to decimal
    octalToDecimal(num: string) {
        let temp = num.slice();

        //Runs if binary doesn't have dots
        if(temp.indexOf('.') === -1) {
            var naiveReverse = function(temp: string) {
                return temp.split('').reverse().join('');
            }
            temp = naiveReverse(temp);
            
            let decNum = 0;
            for(let i = 0; i != temp.length; ++i) {
                decNum += (Math.pow(8, i) * (+temp[i]));
            }
            return decNum.toString(); 
        }
        else {
            let num_frags = temp.split('.');

            var naiveReverse = function(temp: string) {
                return num_frags[0].split('').reverse().join('');
            }
            num_frags[0] = naiveReverse(num_frags[0]);
            
            let decNum = 0;
            let decNum2 = 0;
            for(let i = 0; i != num_frags[0].length; ++i) {
                decNum += (Math.pow(8, i) * (+(num_frags[0][i])));
                
            }
            for(let i = 1; i <= num_frags[1].length; ++i) {
                decNum2 += (Math.pow(8, -i) * (+(num_frags[1][i - 1])));
            }
            let final_num: number = (decNum + decNum2);
            return final_num.toString();
        }
        
    }
    octalToHex(num: string) {
        let dec = this.octalToDecimal(num);
        return this.decimalToHex(dec).toString();
    }
    decimalToBinary(num: string) {
        return (+num).toString(2);
    }
    decimalToOctal(num: string) {
        return (+num).toString(8);
    }
    decimalToHex(num: string) {
        return (+num).toString(16).toUpperCase();
    }
    hexToDecimal(hex): string {
        
        hex = hex.split(/\./);
        var len = hex[1].length;
        hex[1] = parseInt(hex[1], 16);
        hex[1] *= Math.pow(16, -len);
        return (parseInt(hex[0], 16) + hex[1]).toString();
        
    }
    hexToBinary(num: string) {
        let dec = this.hexToDecimal(num);
        return this.decimalToBinary(dec).toString();
    }
    hexToOctal(num: string) {
        let dec = this.hexToDecimal(num);
        return this.decimalToOctal(dec).toString();
    }
}