webpackJsonp([93],{"./node_modules/json-loader/index.js!./.cache/json/api-type-pprintast-html.json":function(x,A){x.exports={data:{file:{relativePath:"api/type_Pprintast.html",childRawHtml:{content:'<div class="ocamldoc"><pre>sig\n\n&#xA0;&#xA0;type&#xA0;space_formatter&#xA0;=&#xA0;(unit,&#xA0;Format.formatter,&#xA0;unit)&#xA0;Pervasives.format\n&#xA0;&#xA0;class&#xA0;printer&#xA0;:\n&#xA0;&#xA0;&#xA0;&#xA0;unit&#xA0;-&gt;\n&#xA0;&#xA0;&#xA0;&#xA0;object&#xA0;(&apos;b)\n&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;val&#xA0;pipe&#xA0;:&#xA0;bool\n&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;val&#xA0;semi&#xA0;:&#xA0;bool\n&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;method&#xA0;attribute&#xA0;:&#xA0;Format.formatter&#xA0;-&gt;&#xA0;Parsetree.attribute&#xA0;-&gt;&#xA0;unit\n&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;method&#xA0;attributes&#xA0;:&#xA0;Format.formatter&#xA0;-&gt;&#xA0;Parsetree.attributes&#xA0;-&gt;&#xA0;unit\n&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;method&#xA0;binding&#xA0;:&#xA0;Format.formatter&#xA0;-&gt;&#xA0;Parsetree.value_binding&#xA0;-&gt;&#xA0;unit\n&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;method&#xA0;bindings&#xA0;:\n&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;Format.formatter&#xA0;-&gt;\n&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;Asttypes.rec_flag&#xA0;*&#xA0;Parsetree.value_binding&#xA0;list&#xA0;-&gt;&#xA0;unit\n&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;method&#xA0;case_list&#xA0;:&#xA0;Format.formatter&#xA0;-&gt;&#xA0;Parsetree.case&#xA0;list&#xA0;-&gt;&#xA0;unit\n&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;method&#xA0;class_expr&#xA0;:&#xA0;Format.formatter&#xA0;-&gt;&#xA0;Parsetree.class_expr&#xA0;-&gt;&#xA0;unit\n&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;method&#xA0;class_field&#xA0;:&#xA0;Format.formatter&#xA0;-&gt;&#xA0;Parsetree.class_field&#xA0;-&gt;&#xA0;unit\n&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;method&#xA0;class_params_def&#xA0;:\n&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;Format.formatter&#xA0;-&gt;\n&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;(Parsetree.core_type&#xA0;*&#xA0;Asttypes.variance)&#xA0;list&#xA0;-&gt;&#xA0;unit\n&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;method&#xA0;class_signature&#xA0;:\n&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;Format.formatter&#xA0;-&gt;&#xA0;Parsetree.class_signature&#xA0;-&gt;&#xA0;unit\n&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;method&#xA0;class_structure&#xA0;:\n&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;Format.formatter&#xA0;-&gt;&#xA0;Parsetree.class_structure&#xA0;-&gt;&#xA0;unit\n&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;method&#xA0;class_type&#xA0;:&#xA0;Format.formatter&#xA0;-&gt;&#xA0;Parsetree.class_type&#xA0;-&gt;&#xA0;unit\n&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;method&#xA0;class_type_declaration_list&#xA0;:\n&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;Format.formatter&#xA0;-&gt;&#xA0;Parsetree.class_type_declaration&#xA0;list&#xA0;-&gt;&#xA0;unit\n&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;method&#xA0;constant&#xA0;:&#xA0;Format.formatter&#xA0;-&gt;&#xA0;Asttypes.constant&#xA0;-&gt;&#xA0;unit\n&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;method&#xA0;constant_string&#xA0;:&#xA0;Format.formatter&#xA0;-&gt;&#xA0;string&#xA0;-&gt;&#xA0;unit\n&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;method&#xA0;core_type&#xA0;:&#xA0;Format.formatter&#xA0;-&gt;&#xA0;Parsetree.core_type&#xA0;-&gt;&#xA0;unit\n&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;method&#xA0;core_type1&#xA0;:&#xA0;Format.formatter&#xA0;-&gt;&#xA0;Parsetree.core_type&#xA0;-&gt;&#xA0;unit\n&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;method&#xA0;direction_flag&#xA0;:\n&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;Format.formatter&#xA0;-&gt;&#xA0;Asttypes.direction_flag&#xA0;-&gt;&#xA0;unit\n&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;method&#xA0;directive_argument&#xA0;:\n&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;Format.formatter&#xA0;-&gt;&#xA0;Parsetree.directive_argument&#xA0;-&gt;&#xA0;unit\n&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;method&#xA0;exception_declaration&#xA0;:\n&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;Format.formatter&#xA0;-&gt;&#xA0;Parsetree.extension_constructor&#xA0;-&gt;&#xA0;unit\n&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;method&#xA0;expression&#xA0;:&#xA0;Format.formatter&#xA0;-&gt;&#xA0;Parsetree.expression&#xA0;-&gt;&#xA0;unit\n&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;method&#xA0;expression1&#xA0;:&#xA0;Format.formatter&#xA0;-&gt;&#xA0;Parsetree.expression&#xA0;-&gt;&#xA0;unit\n&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;method&#xA0;expression2&#xA0;:&#xA0;Format.formatter&#xA0;-&gt;&#xA0;Parsetree.expression&#xA0;-&gt;&#xA0;unit\n&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;method&#xA0;extension&#xA0;:&#xA0;Format.formatter&#xA0;-&gt;&#xA0;Parsetree.extension&#xA0;-&gt;&#xA0;unit\n&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;method&#xA0;extension_constructor&#xA0;:\n&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;Format.formatter&#xA0;-&gt;&#xA0;Parsetree.extension_constructor&#xA0;-&gt;&#xA0;unit\n&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;method&#xA0;floating_attribute&#xA0;:\n&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;Format.formatter&#xA0;-&gt;&#xA0;Parsetree.attribute&#xA0;-&gt;&#xA0;unit\n&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;method&#xA0;item_attribute&#xA0;:&#xA0;Format.formatter&#xA0;-&gt;&#xA0;Parsetree.attribute&#xA0;-&gt;&#xA0;unit\n&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;method&#xA0;item_attributes&#xA0;:\n&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;Format.formatter&#xA0;-&gt;&#xA0;Parsetree.attributes&#xA0;-&gt;&#xA0;unit\n&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;method&#xA0;item_extension&#xA0;:&#xA0;Format.formatter&#xA0;-&gt;&#xA0;Parsetree.extension&#xA0;-&gt;&#xA0;unit\n&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;method&#xA0;label_exp&#xA0;:\n&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;Format.formatter&#xA0;-&gt;\n&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;Asttypes.label&#xA0;*&#xA0;Parsetree.expression&#xA0;option&#xA0;*&#xA0;Parsetree.pattern&#xA0;-&gt;\n&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;unit\n&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;method&#xA0;label_x_expression_param&#xA0;:\n&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;Format.formatter&#xA0;-&gt;&#xA0;Asttypes.label&#xA0;*&#xA0;Parsetree.expression&#xA0;-&gt;&#xA0;unit\n&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;method&#xA0;list&#xA0;:\n&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;?sep:Pprintast.space_formatter&#xA0;-&gt;\n&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;?first:Pprintast.space_formatter&#xA0;-&gt;\n&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;?last:Pprintast.space_formatter&#xA0;-&gt;\n&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;(Format.formatter&#xA0;-&gt;&#xA0;&apos;a&#xA0;-&gt;&#xA0;unit)&#xA0;-&gt;\n&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;Format.formatter&#xA0;-&gt;&#xA0;&apos;a&#xA0;list&#xA0;-&gt;&#xA0;unit\n&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;method&#xA0;longident&#xA0;:&#xA0;Format.formatter&#xA0;-&gt;&#xA0;Longident.t&#xA0;-&gt;&#xA0;unit\n&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;method&#xA0;longident_loc&#xA0;:\n&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;Format.formatter&#xA0;-&gt;&#xA0;Longident.t&#xA0;Asttypes.loc&#xA0;-&gt;&#xA0;unit\n&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;method&#xA0;module_expr&#xA0;:&#xA0;Format.formatter&#xA0;-&gt;&#xA0;Parsetree.module_expr&#xA0;-&gt;&#xA0;unit\n&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;method&#xA0;module_type&#xA0;:&#xA0;Format.formatter&#xA0;-&gt;&#xA0;Parsetree.module_type&#xA0;-&gt;&#xA0;unit\n&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;method&#xA0;mutable_flag&#xA0;:&#xA0;Format.formatter&#xA0;-&gt;&#xA0;Asttypes.mutable_flag&#xA0;-&gt;&#xA0;unit\n&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;method&#xA0;nonrec_flag&#xA0;:&#xA0;Format.formatter&#xA0;-&gt;&#xA0;Asttypes.rec_flag&#xA0;-&gt;&#xA0;unit\n&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;method&#xA0;option&#xA0;:\n&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;?first:Pprintast.space_formatter&#xA0;-&gt;\n&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;?last:Pprintast.space_formatter&#xA0;-&gt;\n&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;(Format.formatter&#xA0;-&gt;&#xA0;&apos;a&#xA0;-&gt;&#xA0;unit)&#xA0;-&gt;\n&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;Format.formatter&#xA0;-&gt;&#xA0;&apos;a&#xA0;option&#xA0;-&gt;&#xA0;unit\n&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;method&#xA0;paren&#xA0;:\n&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;?first:Pprintast.space_formatter&#xA0;-&gt;\n&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;?last:Pprintast.space_formatter&#xA0;-&gt;\n&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;bool&#xA0;-&gt;\n&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;(Format.formatter&#xA0;-&gt;&#xA0;&apos;a&#xA0;-&gt;&#xA0;unit)&#xA0;-&gt;&#xA0;Format.formatter&#xA0;-&gt;&#xA0;&apos;a&#xA0;-&gt;&#xA0;unit\n&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;method&#xA0;pattern&#xA0;:&#xA0;Format.formatter&#xA0;-&gt;&#xA0;Parsetree.pattern&#xA0;-&gt;&#xA0;unit\n&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;method&#xA0;pattern1&#xA0;:&#xA0;Format.formatter&#xA0;-&gt;&#xA0;Parsetree.pattern&#xA0;-&gt;&#xA0;unit\n&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;method&#xA0;payload&#xA0;:&#xA0;Format.formatter&#xA0;-&gt;&#xA0;Parsetree.payload&#xA0;-&gt;&#xA0;unit\n&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;method&#xA0;private_flag&#xA0;:&#xA0;Format.formatter&#xA0;-&gt;&#xA0;Asttypes.private_flag&#xA0;-&gt;&#xA0;unit\n&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;method&#xA0;rec_flag&#xA0;:&#xA0;Format.formatter&#xA0;-&gt;&#xA0;Asttypes.rec_flag&#xA0;-&gt;&#xA0;unit\n&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;method&#xA0;reset&#xA0;:&#xA0;&apos;b\n&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;method&#xA0;reset_ifthenelse&#xA0;:&#xA0;&apos;b\n&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;method&#xA0;reset_pipe&#xA0;:&#xA0;&apos;b\n&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;method&#xA0;reset_semi&#xA0;:&#xA0;&apos;b\n&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;method&#xA0;signature&#xA0;:\n&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;Format.formatter&#xA0;-&gt;&#xA0;Parsetree.signature_item&#xA0;list&#xA0;-&gt;&#xA0;unit\n&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;method&#xA0;signature_item&#xA0;:\n&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;Format.formatter&#xA0;-&gt;&#xA0;Parsetree.signature_item&#xA0;-&gt;&#xA0;unit\n&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;method&#xA0;simple_expr&#xA0;:&#xA0;Format.formatter&#xA0;-&gt;&#xA0;Parsetree.expression&#xA0;-&gt;&#xA0;unit\n&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;method&#xA0;simple_pattern&#xA0;:&#xA0;Format.formatter&#xA0;-&gt;&#xA0;Parsetree.pattern&#xA0;-&gt;&#xA0;unit\n&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;method&#xA0;string_quot&#xA0;:&#xA0;Format.formatter&#xA0;-&gt;&#xA0;Asttypes.label&#xA0;-&gt;&#xA0;unit\n&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;method&#xA0;structure&#xA0;:\n&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;Format.formatter&#xA0;-&gt;&#xA0;Parsetree.structure_item&#xA0;list&#xA0;-&gt;&#xA0;unit\n&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;method&#xA0;structure_item&#xA0;:\n&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;Format.formatter&#xA0;-&gt;&#xA0;Parsetree.structure_item&#xA0;-&gt;&#xA0;unit\n&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;method&#xA0;sugar_expr&#xA0;:&#xA0;Format.formatter&#xA0;-&gt;&#xA0;Parsetree.expression&#xA0;-&gt;&#xA0;bool\n&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;method&#xA0;toplevel_phrase&#xA0;:\n&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;Format.formatter&#xA0;-&gt;&#xA0;Parsetree.toplevel_phrase&#xA0;-&gt;&#xA0;unit\n&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;method&#xA0;type_declaration&#xA0;:\n&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;Format.formatter&#xA0;-&gt;&#xA0;Parsetree.type_declaration&#xA0;-&gt;&#xA0;unit\n&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;method&#xA0;type_def_list&#xA0;:\n&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;Format.formatter&#xA0;-&gt;&#xA0;Parsetree.type_declaration&#xA0;list&#xA0;-&gt;&#xA0;unit\n&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;method&#xA0;type_extension&#xA0;:\n&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;Format.formatter&#xA0;-&gt;&#xA0;Parsetree.type_extension&#xA0;-&gt;&#xA0;unit\n&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;method&#xA0;type_param&#xA0;:\n&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;Format.formatter&#xA0;-&gt;&#xA0;Parsetree.core_type&#xA0;*&#xA0;Asttypes.variance&#xA0;-&gt;&#xA0;unit\n&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;method&#xA0;type_params&#xA0;:\n&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;Format.formatter&#xA0;-&gt;\n&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;(Parsetree.core_type&#xA0;*&#xA0;Asttypes.variance)&#xA0;list&#xA0;-&gt;&#xA0;unit\n&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;method&#xA0;type_with_label&#xA0;:\n&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;Format.formatter&#xA0;-&gt;&#xA0;Asttypes.label&#xA0;*&#xA0;Parsetree.core_type&#xA0;-&gt;&#xA0;unit\n&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;method&#xA0;tyvar&#xA0;:&#xA0;Format.formatter&#xA0;-&gt;&#xA0;string&#xA0;-&gt;&#xA0;unit\n&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;method&#xA0;under_ifthenelse&#xA0;:&#xA0;&apos;b\n&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;method&#xA0;under_pipe&#xA0;:&#xA0;&apos;b\n&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;method&#xA0;under_semi&#xA0;:&#xA0;&apos;b\n&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;method&#xA0;value_description&#xA0;:\n&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;Format.formatter&#xA0;-&gt;&#xA0;Parsetree.value_description&#xA0;-&gt;&#xA0;unit\n&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;method&#xA0;virtual_flag&#xA0;:&#xA0;Format.formatter&#xA0;-&gt;&#xA0;Asttypes.virtual_flag&#xA0;-&gt;&#xA0;unit\n&#xA0;&#xA0;&#xA0;&#xA0;end\n&#xA0;&#xA0;val&#xA0;default&#xA0;:&#xA0;Pprintast.printer\n&#xA0;&#xA0;val&#xA0;toplevel_phrase&#xA0;:&#xA0;Format.formatter&#xA0;-&gt;&#xA0;Parsetree.toplevel_phrase&#xA0;-&gt;&#xA0;unit\n&#xA0;&#xA0;val&#xA0;expression&#xA0;:&#xA0;Format.formatter&#xA0;-&gt;&#xA0;Parsetree.expression&#xA0;-&gt;&#xA0;unit\n&#xA0;&#xA0;val&#xA0;string_of_expression&#xA0;:&#xA0;Parsetree.expression&#xA0;-&gt;&#xA0;string\n&#xA0;&#xA0;val&#xA0;top_phrase&#xA0;:&#xA0;Format.formatter&#xA0;-&gt;&#xA0;Parsetree.toplevel_phrase&#xA0;-&gt;&#xA0;unit\n&#xA0;&#xA0;val&#xA0;core_type&#xA0;:&#xA0;Format.formatter&#xA0;-&gt;&#xA0;Parsetree.core_type&#xA0;-&gt;&#xA0;unit\n&#xA0;&#xA0;val&#xA0;pattern&#xA0;:&#xA0;Format.formatter&#xA0;-&gt;&#xA0;Parsetree.pattern&#xA0;-&gt;&#xA0;unit\n&#xA0;&#xA0;val&#xA0;signature&#xA0;:&#xA0;Format.formatter&#xA0;-&gt;&#xA0;Parsetree.signature&#xA0;-&gt;&#xA0;unit\n&#xA0;&#xA0;val&#xA0;structure&#xA0;:&#xA0;Format.formatter&#xA0;-&gt;&#xA0;Parsetree.structure&#xA0;-&gt;&#xA0;unit\n&#xA0;&#xA0;val&#xA0;string_of_structure&#xA0;:&#xA0;Parsetree.structure&#xA0;-&gt;&#xA0;string\nend</pre></div>'}}},pathContext:{relativePath:"api/type_Pprintast.html"}}}});
//# sourceMappingURL=path---api-type-pprintast-html-cd684ba6401730d23301.js.map