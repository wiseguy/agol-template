//webmap with featurelayers
//1b98c04b785948c5a45c0dbe0f55f309

//actural webmap for app c5764286d80f4658ac015908dc3ff853
{
    "configurationSettings": [{
        "category": "<b>General Settings</b>",
        "fields": [{
            "type": "webmap",
            "label": "Select a map"
        }, {
            "type": "string",
            "fieldName": "title",
            "label": "Title",
            "tooltip": "Title",
            "placeHolder": "Title"
        }, {
            "type": "string",
            "fieldName": "logo",
            "label": "Logo URL",
            "tooltip": "Logo",
            "placeHolder": "Logo URL"
        }, {
            "type": "color",
            "fieldName": "color",
            "label": "Color",
            "tooltip": "Color"
        }, {
            "type": "layerAndFieldSelector",
            "fields": [{
                "supportedTypes": ["esriFieldTypeSmallInteger", "esriFieldTypeInteger", "esriFieldTypeSingle", "esriFieldTypeDouble", "esriFieldTypeString"],
                "multipleSelection": false,
                "fieldName": "filterField",
                "label": "Field to filter features",
                "tooltip": "Field used to filter features"

            }, {
                "supportedTypes": ["esriFieldTypeSmallInteger", "esriFieldTypeInteger", "esriFieldTypeSingle", "esriFieldTypeDouble"],
                "multipleSelection": true,
                "fieldName": "sumFields",
                "label": "Summary fields",
                "tooltip": "List of numeric fields where the sum will be displayed"

            }, {
                "supportedTypes": ["esriFieldTypeSmallInteger", "esriFieldTypeInteger", "esriFieldTypeSingle", "esriFieldTypeDouble"],
                "multipleSelection": true,
                "fieldName": "avgFields",
                "label": "Average fields",
                "tooltip": "List of numeric fields where the average value will be displayed"

            }, {
                "supportedTypes": ["esriFieldTypeSmallInteger", "esriFieldTypeInteger", "esriFieldTypeSingle", "esriFieldTypeDouble"],
                "multipleSelection": true,
                "fieldName": "minFields",
                "label": "Minimum fields",
                "tooltip": "List of numeric fields where the minimum value will be displayed"

            }, {
                "supportedTypes": ["esriFieldTypeSmallInteger", "esriFieldTypeInteger", "esriFieldTypeSingle", "esriFieldTypeDouble"],
                "multipleSelection": true,
                "fieldName": "maxFields",
                "label": "Maximum fields",
                "tooltip": "List of numeric fields where the maximum value will be displayed"

            }],
            "layerOptions": {
                "supportedTypes": [
                    "FeatureLayer", "FeatureCollection"
                ],
                "geometryTypes": [
                    "esriGeometryPoint",
                    "esriGeometryLine",
                    "esriGeometryPolygon"
                ]
            },
            "fieldName": "summaryLayer",
            "label": "Summary layer",
            "tooltip": "Layer that will be summarized"
        }, {
            "type": "boolean",
            "fieldName": "cluster",
            "label": "Display summary as clusters ",
            "tooltip": "Summary layer points will be displayed as clusters"
        }, {
            "type": "boolean",
            "fieldName": "hideCount",
            "label": "Hide feature count",
            "tooltip": "Hide feature count"
        }, {
            "type": "boolean",
            "fieldName": "hideSummaryType",
            "label": "Hide type of summary",
            "tooltip": "Hide type of summary for each field"
        }]
    }],
    "values": {
        "title": "",
        "logo": "images/logo.png",
        "color": "#80ab00",
        "cluster": true,
        "hideCount": false,
        "hideSummaryType": false
    }
}

//GAB
{
    "configurationSettings": [{
        "category": "General Settings",
        "fields": [{
                "type": "webmap",
                "label": "Select a map"
            },

            {
                "type": "layerAndFieldSelector",
                "layerOptions": {
                    "supportedTypes": ["MapServiceLayer", "ImageServiceLayer", "FeatureLayer"]
                },
                "fieldName": "selectedLayerAndFields",
                "label": "Select a layer to perform analysis on",
                "fields": [{
                    "supportedTypes": ["esriFieldTypeSmallInteger", "esriFieldTypeInteger", "esriFieldTypeSingle", "esriFieldTypeDouble", "esriFieldTypeString"],
                    "multipleSelection": false,
                    "fieldName": "filterField",
                    "label": "Report Field",
                    "tooltip": "Field used to filter features"

                }, {
                    "supportedTypes": ["esriFieldTypeSmallInteger", "esriFieldTypeInteger", "esriFieldTypeSingle", "esriFieldTypeDouble"],
                    "multipleSelection": false,
                    "fieldName": "sumFields",
                    "label": "Report Field",
                    "tooltip": "List of numeric fields where the sum will be displayed"

                }]
            },

            {
                "type": "layerAndFieldSelector",
                "layerOptions": {
                    "supportedTypes": ["MapServiceLayer", "ImageServiceLayer", "FeatureLayer"]
                },
                "fieldName": "selectedLayerAndFieldsTwo",
                "label": "Select a second layer.",
                "multipleSelection": true
            },


            {
                "type": "options",
                "fieldName": "theme",
                "tooltip": "Color theme to use",
                "label": "Color Scheme:",
                "options": [{
                    "label": "Blue",
                    "value": "blue"
                }, {
                    "label": "Green",
                    "value": "green"
                }, {
                    "label": "Orange",
                    "value": "orange"
                }]
            }, {
                "type": "string",
                "fieldName": "layer",
                "label": "Analysis Layer",
                "tooltip": "Feature Layer with Facilities to search"
            }, {
                "type": "string",
                "fieldName": "orgname",
                "label": "Organization Name:",
                "tooltip": "",
                "stringFieldOption": "richtext",
                "placeHolder": "Organization Name"
            }, {
                "type": "number",
                "fieldName": "bufferdistance",
                "label": "Search Distance (miles)",
                "value": "1"
            }
        ]
    }],
    "values": {
        "theme": "orange",
        "bufferdistance": 1,
        "selectedLayerAndFields": {
            "layerId": "GAB_online_en - Protected areas",
            "fields": ["nom_ap"]
        }
    }
}