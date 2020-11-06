
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DecimalToBinaryComponent } from './converter/decimal-to-binary/decimal-to-binary.component';
import { DecimalToHexComponent } from './converter/decimal-to-hex/decimal-to-hex.component';
import { DecimalToOctalComponent } from './converter/decimal-to-octal/decimal-to-octal.component';
import { BinaryToDecimalComponent } from './converter/binary-to-decimal/binary-to-decimal.component';
import { BinaryToHexComponent } from './converter/binary-to-hex/binary-to-hex.component';
import { BinaryToOctalComponent } from './converter/binary-to-octal/binary-to-octal.component';
import { HexToDecimalComponent } from './converter/hex-to-decimal/hex-to-decimal.component';
import { HexToBinaryComponent } from './converter/hex-to-binary/hex-to-binary.component';
import { HexToOctalComponent } from './converter/hex-to-octal/hex-to-octal.component';
import { OctalToDecimalComponent } from './converter/octal-to-decimal/octal-to-decimal.component';
import { OctalToBinaryComponent } from './converter/octal-to-binary/octal-to-binary.component';
import { OctalToHexComponent } from './converter/octal-to-hex/octal-to-hex.component';
import { MaterialModule } from './material.module';

const ROUTES: Routes  = [
    {path: "b2d", component: BinaryToDecimalComponent},
    {path: "b2o", component: BinaryToOctalComponent},
    {path: "b2h", component: BinaryToHexComponent},
    {path: "d2b", component: DecimalToBinaryComponent},
    {path: "d2o", component: DecimalToOctalComponent},
    {path: "d2h", component: DecimalToHexComponent},
    {path: "h2b", component: HexToBinaryComponent},
    {path: "h2d", component: HexToDecimalComponent},
    {path: "h2o", component: HexToOctalComponent},
    {path: "o2b", component: OctalToBinaryComponent},
    {path: "o2d", component: OctalToDecimalComponent},
    {path: "o2h", component: OctalToHexComponent},
    {path: "", redirectTo: "b2d", pathMatch: "full"}
]
@NgModule({
    declarations: [
        DecimalToBinaryComponent,
        DecimalToHexComponent,
        DecimalToOctalComponent,
        BinaryToDecimalComponent,
        BinaryToHexComponent,
        BinaryToOctalComponent,
        HexToDecimalComponent,
        HexToBinaryComponent,
        HexToOctalComponent,
        OctalToDecimalComponent,
        OctalToBinaryComponent,
        OctalToHexComponent
    ],
    imports: [
        RouterModule.forRoot(ROUTES),
        MaterialModule
    ],
    exports: [
        RouterModule,
        DecimalToBinaryComponent,
        DecimalToHexComponent,
        DecimalToOctalComponent,
        BinaryToDecimalComponent,
        BinaryToHexComponent,
        BinaryToOctalComponent,
        HexToDecimalComponent,
        HexToBinaryComponent,
        HexToOctalComponent,
        OctalToDecimalComponent,
        OctalToBinaryComponent,
        OctalToHexComponent,
        MaterialModule
    ]
})
export class AppRouterModule {

}