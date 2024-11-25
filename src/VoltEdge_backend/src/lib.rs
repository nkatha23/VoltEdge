use candid::{CandidType,candid_method};
use ic_cdk_macros::{init, query, update};
use ic_cdk::caller;
use std::collections::HashMap;
use std::sync::Mutex;
use serde::{Serialize, Deserialize};

// use ic_cdk::api::management_canister::http_request::{HttpRequest, HttpResponse};
// use ic_cdk::Principal;

// const ANONYMOUS_SUFFIX: u8 = 4;

// ====== Data Models ======
#[derive(CandidType, Serialize, Deserialize, Clone, Debug)]
struct EnergyUsage {
    timestamp: u64,
    consumption_kwh: f64,
}

#[derive(CandidType, Serialize, Deserialize, Clone, Debug)]
struct EnergyRecommendation {
    recommendation: String,
    potential_savings: f64,
}

// ====== Storage ======
thread_local! {
    static ENERGY_USAGE: Mutex<HashMap<String, Vec<EnergyUsage>>> = Mutex::new(HashMap::new());
    static ENERGY_RECOMMENDATIONS: Mutex<HashMap<String, Vec<EnergyRecommendation>>> = Mutex::new(HashMap::new());
}

// fn is_authorized_user() -> Result<(), String> {
//     let principal = &caller();
//     let bytes = principal.as_ref();

//     match bytes.len() {
//         1 if bytes[0] == ANONYMOUS_SUFFIX => {
//             Err("Anonymous principal not allowed".to_string())
//         },
//         _ => Ok(()),
//     }
// }

// ====== Initialization ======
// #[init]
// fn init() {
//     ic_cdk::println!("Initialization completed!");
// }

// ====== HTTP Handler ======
// #[query]
// fn http_request(request: HttpRequest) -> HttpResponse {
//     HttpResponse {
//         //status_code: 200,
//         headers: vec![
//             HeaderField("Content-Length".to_string(), format!("{}", 0)),
//             HeaderField("Content-Disposition".to_string(), "inline".to_string()),
//             HeaderField("Content-Type".to_string(), "text/html".to_string()),
//         ],
//         body: vec![],
//     }
// }

// ====== Update Functions ======
#[update]
fn add_energy_usage(consumption_kwh: f64) {
    let timestamp = ic_cdk::api::time();
    let caller_id = caller().to_string(); // Get the authenticated user's Principal ID

    ENERGY_USAGE.with(|usage_data| {
        let mut usage_data = usage_data.lock().expect("Failed to lock ENERGY_USAGE");
        usage_data
            .entry(caller_id.clone())
            .or_insert_with(Vec::new)
            .push(EnergyUsage {
                timestamp,
                consumption_kwh,
            });
    });
    //console.log("Add Energy Usage success");
    //return "Added Energy"
    println!("Sucess AddedEnergy")
    
}

#[update]
fn save_recommendations(recommendations: Vec<EnergyRecommendation>) {
    let caller_id = caller().to_string();

    ENERGY_RECOMMENDATIONS.with(|saved_recommendations| {
        let mut saved_recommendations = saved_recommendations.lock().expect("Failed to lock ENERGY_RECOMMENDATIONS");
        saved_recommendations
            .entry(caller_id.clone())
            .or_insert_with(Vec::new)
            .extend(recommendations);
    });
}

// ====== Query Functions ======
#[query]
fn analyze_user_energy() -> Vec<EnergyRecommendation> {
    let caller_id = caller().to_string();

    ENERGY_USAGE.with(|usage_data| {
        let usage_data = usage_data.lock().expect("Failed to lock ENERGY_USAGE");
        if let Some(user_data) = usage_data.get(&caller_id) {
            // Analyze energy usage
            user_data
                .iter()
                .map(|record| {
                    if record.consumption_kwh > 100.0 {
                        EnergyRecommendation {
                            recommendation: "Upgrade to energy-efficient appliances".to_string(),
                            potential_savings: record.consumption_kwh * 0.1, // Example calculation
                        }
                    } else {
                        EnergyRecommendation {
                            recommendation: "Your energy usage is optimal!".to_string(),
                            potential_savings: 0.0,
                        }
                    }
                })
                .collect()
        } else {
            vec![]
        }
    })
}

#[query]
fn get_recommendations() -> Vec<EnergyRecommendation> {
    let caller_id = caller().to_string();

    ENERGY_RECOMMENDATIONS.with(|saved_recommendations| {
        let saved_recommendations = saved_recommendations.lock().expect("Failed to lock ENERGY_RECOMMENDATIONS");
        saved_recommendations
            .get(&caller_id)
            .cloned()
            .unwrap_or_else(Vec::new)
    })
}
